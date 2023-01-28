# Stage 1
FROM node:16.17 as node
WORKDIR /app
COPY . .
RUN npm install --force
RUN npm run build --prod
# Stage 2
FROM nginx:alpine
COPY --from=node /app/dist/angular-app /usr/share/nginx/html