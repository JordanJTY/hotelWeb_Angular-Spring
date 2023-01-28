# Stage 1
FROM node:16-alpine as build-step

WORKDIR /app

COPY package.json /app

RUN npm install --force

COPY . /app

RUN npm run build --prod

# Stage 2

FROM nginx as runtime

COPY --from=build-step /app/dist /usr/share/nginx/html