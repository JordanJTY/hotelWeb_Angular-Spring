FROM openjdk:17-alpine
ADD target/*.jar /usr/src/app.jar
ENTRYPOINT ["java", "-jar", "/usr/src/app.jar"]