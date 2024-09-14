# Production build by Nirmalya Mondal
# Date: 2023-10-05
# Time: 14:30 UTC
# It uses the Caddy image (caddy:2), which is minimal but not a distroless image.

# Stage 1: Build the React app
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./

RUN npm install --production

# Copy the source code and build the React app
COPY . .

RUN npm run build

# Stage 2: Use Caddy to serve the built app
FROM caddy:2

# Copy the build files from the first stage to the Caddy default web directory
COPY --from=build /app/build /usr/share/caddy

# Expose the port Caddy serves on
EXPOSE 80

