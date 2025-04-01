##################################################################################
# Production build by Nirmalya Mondal                                            #
# Date: 2023-10-05                                                               #
# Time: 14:30 UTC                                                                #
# It uses the Caddy image (caddy:2), which is minimal but not a distroless image.#
##################################################################################

# Stage 1: Build the React app
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Add build arguments for versioning and metadata
ARG BUILD_VERSION=dev
ARG BUILD_DATE=unknown
ARG COMMIT_SHA=unknown

# First copy just the package files for better layer caching
COPY package*.json ./
RUN npm ci --only=production

# Copy the rest of the source code
COPY . .

# Build the React app with environment variables if needed
RUN REACT_APP_VERSION=${BUILD_VERSION} REACT_APP_BUILD_DATE=${BUILD_DATE} npm run build

# Stage 2: Use Caddy to serve the built app
FROM caddy:2

# Add metadata labels
LABEL maintainer="Nirmalya Mondal" \
      version="${BUILD_VERSION}" \
      build-date="${BUILD_DATE}" \
      vcs-ref="${COMMIT_SHA}" \
      description="Production React application container"

# Copy the Caddyfile configuration if you have custom settings
# COPY Caddyfile /etc/caddy/Caddyfile

# Copy the build files from the first stage to the Caddy default web directory
COPY --from=build /app/build /usr/share/caddy

# Create and use a non-root user for Caddy
# Note: Caddy already runs as non-root by default, but this makes it explicit
USER caddy

# Add health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost:80 || exit 1

# Expose the port Caddy serves on
EXPOSE 80

# No need to specify CMD as the Caddy image already has the correct entrypoint
