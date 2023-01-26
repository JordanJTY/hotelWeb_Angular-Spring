# Utilizar la imagen oficial de OpenJDK
FROM openjdk:17

# Crear un directorio para la aplicación de Spring Boot
RUN mkdir -p /usr/src/app

# Establecer el directorio de trabajo para los siguientes comandos
WORKDIR /usr/src/app

# Copiar el archivo .jar de la aplicación al contenedor
COPY target/*.jar /usr/src/app.jar

# Exponer el puerto en el que se ejecuta la aplicación
EXPOSE 8080

# Iniciar la aplicación
ENTRYPOINT ["java", "-jar", "/usr/src/app.jar"]