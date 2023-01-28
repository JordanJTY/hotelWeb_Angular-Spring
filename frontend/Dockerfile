# Stage 1
FROM node:16.17 as node
WORKDIR /app
COPY . .
RUN npm install --force
RUN npm run build --prod
CMD ["npm", "start"]