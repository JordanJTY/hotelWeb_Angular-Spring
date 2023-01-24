# Utilizar la imagen oficial de Java
FROM openjdk:14

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar el archivo jar
COPY target/classes

# Exponer el puerto
EXPOSE 8080

# Iniciar la aplicación
CMD ["java", "-jar", "app.jar"]