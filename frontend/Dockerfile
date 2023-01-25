#Utilizar la imagen oficial de Node.js
FROM node:16

#Establecer el directorio de trabajo
WORKDIR /usr/src/app

#Copiar el resto del código
ADD . .

#Instalar las dependencias
RUN npm install

#Generar el build de Angular
RUN npm run build

#Iniciar la aplicación
CMD ["npm", "start"]