@echo off

REM Configurar backend
cd backend/

call mvnw install

echo.
set/p user= Input your mysql user:  
echo.
set/p password= Input his password: 
cls
echo spring.datasource.url=jdbc:mysql://localhost/db_hotel?useSSL=true > src\main\resources\application.properties
echo spring.datasource.username=%user% >> src\main\resources\application.properties
echo spring.datasource.password=%password% >> src\main\resources\application.properties
echo spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver >> src\main\resources\application.properties
echo spring.jpa.database-platform=org.hibernate.dialect.MySQL5InnoDBDialect >> src\main\resources\application.properties
echo spring.jpa.hibernate.ddl-auto=create >> src\main\resources\application.properties
echo spring.servlet.multipart.max-file-size=15MB >> src\main\resources\application.properties
echo spring.servlet.multipart.max-request-size=15MB >> src\main\resources\application.properties
echo logging.level.org.hibernate.SQL=debug >> src\main\resources\application.properties
echo spring.app.jwtSecret = akoSecretKey >> src\main\resources\application.properties
echo spring.app.jwtExpirationMs = 86400000 >> src\main\resources\application.properties

start java -jar target\hotelAko-0.0.1-SNAPSHOT.jar

cls

REM Volvemos a la raiz del proyecto
cd ..

REM Entrar en el frontend e instalar dependencias

cd frontend

echo Instalamos las dependencias.

call npm install --force

cls

REM Iniciar test del frontend

start npm test

REM Iniciar frontend

npm start



