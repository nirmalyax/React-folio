FROM node:current AS build

WORKDIR /App

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM gcr.io/distroless/nodejs

WORKDIR /App

COPY --from=build /App/package*.json ./
COPY --from=build /App/dist ./dist

EXPOSE 3000

# Start the application
CMD ["node", "dist/index.js"]
