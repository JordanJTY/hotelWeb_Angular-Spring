# Stage 1
FROM alpine:3.16 as build

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

# Stage 2

FROM nginx as runtime

COPY --from=build-step /app/docs /usr/share/nginx/html