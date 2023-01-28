FROM node:16.17 as build
WORKDIR /app

RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install --force
COPY . .
RUN ng build

FROM nginx as runtime
COPY --from=build /frontend/dist/hotel-ako /usr/share/nginx/html