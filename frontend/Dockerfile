#Utilizar la imagen oficial de Node.js
FROM node:16.19

# Create a directory for the application
RUN mkdir -p /usr/src/app

# Set the working directory for the rest of the commands
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the application's dependencies
RUN npm install --force

# Copy the rest of the application's files to the container
COPY . .

# Build the application for production
RUN npm run build --prod

# Expose the port that the application runs on
EXPOSE 4201

# Start the application
CMD ["npm", "start"]