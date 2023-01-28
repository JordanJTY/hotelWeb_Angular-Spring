FROM node:14.2.0-alpine3.11 as build
WORKDIR /app

RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install --force
COPY . .
RUN ng build

FROM nginx as runtime
COPY --from=build /app/dist/MyAngularApp /usr/share/nginx/html