# Utilizar la imagen oficial de OpenJDK
FROM openjdk:17

# Establecer el directorio de trabajo para los siguientes comandos
WORKDIR /usr/src/app

# Copiar el archivo .jar de la aplicación al contenedor
COPY target/*.jar /usr/src/app.jar

EXPOSE 8080

# Iniciar la aplicación
ENTRYPOINT ["java", "-jar", "/usr/src/app.jar"]