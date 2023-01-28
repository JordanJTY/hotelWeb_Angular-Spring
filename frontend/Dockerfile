#Utilizar la imagen oficial de Node.js
FROM nginx:1.17.1-alpine

# Set the working directory for the rest of the commands
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the container
COPY package.json /usr/src/app

# Install the application's dependencies
RUN npm install --force

# Copy the rest of the application's files to the container
COPY . /usr/src/app

# Build the application for production
RUN npm run build --prod

EXPOSE 4200

# Start the application
CMD ["npm", "start"]