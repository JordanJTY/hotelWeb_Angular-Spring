#Utilizar la imagen oficial de Node.js
FROM node:16.19

USER root

#Establecer el directorio de trabajo
WORKDIR /usr/src/app

#Copiar el resto del código
COPY . .

#Instalar las dependencias
RUN npm install

#Generar el build de Angular
RUN npm run build

EXPOSE 4200

#Iniciar la aplicación
CMD ["npm", "start"]