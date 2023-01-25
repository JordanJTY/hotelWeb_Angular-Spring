#Utilizar la imagen oficial de Node.js
FROM node:16.19

#Establecer el directorio de trabajo
WORKDIR /usr/src/app

COPY package*.json .

#Instalar las dependencias
RUN npm install

#Copiar el resto del código
COPY . .

#Generar el build de Angular
RUN npm run build

EXPOSE 4200

#Iniciar la aplicación
CMD ["npm", "start"]