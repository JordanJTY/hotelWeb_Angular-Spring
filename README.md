<h1 align="center">Hotel AKO</h1>

<br />
<div align="center">
    <img src="https://github.com/JordanJTY/hotelWeb_Angular-Spring/blob/master/frontend/src/assets/images/logo.png" alt="Logo" width="240" height="80">

  <h3 align="center">Ako hotel's management</h3>

  <p align="center">
    An awesome project inspired in hotel webs!
  </p>
</div>

<details>
  <summary>Content's table</summary>
    <ol>

- [About this project](#About-this-project)
- [Data model](#data-model)
- [Requirements](#user-requirements)
- [Use Cases](#use-cases)
- [System operation and technical specifications](#description-of-system-operation-and-technical-specifications)
- [Interfaces](#interfaces)
  - [Start design](#start-design)
  - [Usability and accessibility](#usability-and-accessibility)
- [Manuals](#Manuals)
  - [Installation guide](#installation-guide)
- [Technology stack](#technology-stack)
- [Technology comparison](#technology-comparison)
- [Planification](#planification)
- [Conclusion](#conclusion)
- [Links and references](#links-and-references)
- [Author](#Author/s)

    </ol>
</details>

## About this project

### Why I did it?

Nowadays, all services need a website to manage them. With this in mind, I realized that some hotels needed a web application for the management of their reservations, apartment, stays... In this way, thanks to an intuitive interface and a good management system, I think it could solve it.

When I was thinking about what application to do, I remembered that I had never asked for an apartment reservation in my whole life. Also, I live on a tourist island, so I decided to research these services to find out how they work when people order an apartment.

This application was made for OpenCanarias, a company in the Canary Islands, in order for them to see my programming skills in my internship.

The idea of this web page is to be used as a hotel reservation manager, where you can register as a user and request reservations for any type of apartment; or as an administrator, being able to create, modify or delete such apartments, as well as being able to review the reservations made by users. 

---

## Data model

As a first step, we will analyze the data model of our project according to the following: 

 - [Entities and attributes](#entities-and-attributes)
 - [Relations between tables](#relationships-between-tables)
 - [Data model diagrams](#data-model-diagrams)

#### Entities and attributes

![ERDiagram][ERDiagram.img]

With this entity-relationship diagram, we can see what entities, attributes and keys we should create in our database structure.

As we can see, we have a database with 5 entities that we will later transform into tables. These are:

+ Apartment:

  - ID: Identification number of each apartment (not null).
  - Amount: Apartment amount what we have.
  - Price: Apartment price.
  - Type: Apartment type (like single apartment, double apartment...).
  - Description: Apartment description.
  - Image: Apartment image what it contains blob (not null).
  - NameImg: Image name encoded.
  - TypeImg: Image type (.png, .jpg...).

+ Reservations:

  - ID: Identification number of each reservation (not null).
  - StartDate: Start date reservation.
  - EndDate: End date reservation.
  - FK:Apartment_ID: Identification number of apartment selected by user (not null).
  - FK:AppUser_ID: Identification number of user who order a reservation (not null).
  
+ User:

  - ID: Identification number of each user (not null).
  - Username: Username.
  - Email: User email.
  - Password: User password encrypted.
  - DateBirth: User's date of birth.

+ Role:

  - ID: role identifier number (not null).
  - Name: Name of the role.

  The information in this table will not change.

+ User_Role:

  - FK:User_ID: Identification number of the user that has a role.
  - FK:Role_ID: Identification number of the role that a user has.

We can obtain the .sql file of the database in the folder 'database' of this project. 

#### Relationships between tables

  - User-Reservation: One-to-Many relationship, one user can request many reservations.
  - Apartment-Reservation: One-to-Many relationship, one apartment can be requested many reservations.
  - User-Role: Many-to-Many relationship, many users can have many roles.

#### Data model diagrams

UML diagram:

![umlDiagram][umlDiagram.img]


Relational Model:

![relacionalDiagram][relacionalDiagram.img]

---

## User requirements

#### Platform:
- **P1**. This application comes as a website that you can use wherever you want.
- **P2**. You can use it on mobile devices or tablets because it is a responsive application.

#### Access:
- **A1**. The app has a guest screen that can be accessed without being logged in.
- **A2**. To make reservations you must be registered as a user, an administrator will check that everything is correct.
- **A3**. As an administrator you can create, edit or delete data.
  - **A3.1**. As an administrator you can create, update or delete an apartment.
  - **A3.2**. As an administrator you can check all reservations of users.
- **A4**. As a user you can edit your reservation.
  - **A4.1**. As a user you can book an apartment and modify it if the start date does not match today's date.
  - **A4.2**. As a user you can delete your reservation when it is finished.

#### Interfaces:

- **I1**. The application has two main interface where you can see all types of apartments.
- **I2**. In the first main interface, you can navigate between help, login or apartment details and there is slider.
  - **I2.1**. In the help interface, you will find cards with some places to go.
    - **I2.1.1**. The first card you will find is the terms and privacy policy.
    - **I2.1.2**. The second card you will fin is the application information.
    - **I2.1.3**. The third card you will find is the additional information.
    - **I2.1.4**. The fourth card you will find is the contact.
  - **I2.2**. You will find a form and some actions in login interface.
    - **I2.2.1**. You will be able to login to these interfaces by filling in the form with your account data.
    - **I2.2.2**. You will be able to register if you do not have an account by clicking on a button.
    - **I2.2.3**. You will be able to recover your password if you do not remember it.
- **I3**. As a user you will be able to find more options than before.
  - **I3.1**. In the help interface, you will find a card to delete your account.
  - **I3.2**. You will be able to book an apartment.
  - **I3.3**. You will be able to see all the reservations you have made.
    - **I3.3.1**. You will be able to delete or edit your reservations depending on whether you have your reservation that day or not.
  - **I3.4**. You will be able to log out.
- **I4**. As a administrator, you will be able to see the second main interface.
  - **I4.1**. You will be able to add new types of apartments.
  - **I4.2**. You will be able to edit or delete existing apartment types.
  - **I4.3**. You will be able to see all the reservations of all users.
    -**I4.3.1**. You will be able to delete user reservations.

#### Actions:

- **A1**. User actions will be accompanied by comments and notifications when they are performed.
- **A2**. When entering data in the form, it is validated that the information is entered correctly, notifying the user if there is an error.

#### Validations:

- **V1**. When typing or adding data, if an error occurs with respect to any character, you will be warned and the desired action will not be allowed.
- **V2**. There are more than one type of validations, such as when you do not have the required credentials or the date is incorrect.
  - **V2.1**. When you book an apartment, you cannot choose dates less than the current date at that time.
- **V3**. When you enter your email address to log in or register, we will apply a mask to see if it is a valid email address.

---

## Use cases

Next we can see the use case diagram, this is reduced to the actions that can be performed by the guest, the user (common user of the application) and the administrator (admin user of the application).

![UseCaseDiagram][useCase.img]

---

## Description of system operation and technical specifications

### Installation guide

#### Requirements

- Eclipse IDE o IntelliJ IDEA.
- MySQL Workbench.
- PostMan, for RESTFul tests.
- Visual Studio Code.

#### Get started 

##### Frontend

[![Angular][angular.io]][angular.url]

To get started, create an empty folder on your computer and open your Visual Studio Code.

Once open, go to Files > Open Folder > and select the folder you just created.

Now, open a terminal in the new folder.

![newTerminal][newTerminal.img]

Once you are in the terminal of your folder execute the following commands:

* clone repository
    ```sh
    git clone https://github.com/JordanJTY/hotelWeb_Angular-Spring
    ```

Install all project's dependencies (Patience! It may take a few minutes):
 
* npm
    ```sh
    npm install
    ```

When dependencies have been installed, you can go to set up your backend.

##### Backend

[![Spring][spring.io]][spring.url]

To get started, open the backend of the project with the IDE of your choice. In my case, I used IntelliJ.

![openedIDE][openedIDE.img]

Once you have the backend open, go to MYSQL Workbench and check your username and password to access in your IDE. Also, take advantage of this opportunity to import a database where you save your data:

![createDB][createDB.img]

Once these steps are done, you can start your backend without first configuring your application properties with your database name and MySQL password.

![changeBackendConfiguration][changeBackendConfiguration.img]

Remember start your frontend!

* Run your frontend
    ```sh
    cd frontend/

    ng serve -o
    ```

### Technical specifications

To run this application, you must have a computer with the following minimum requirements:

  - Storage: 1GB.

  - RAM memory: 2GB.

  - S.O.: Windows 10.

  - CPU: Intel Core i3 or AMD Ryzen 4.

  - Web browser: Google Chrome, Opera, Opera GX, Microsoft Edge, Firefox.

To see this application on your mobile device or tablet, you must execute:

* Execute this:
  ```sh
  ng serve --host 0.0.0.0
  ```     

When you have done the last step, you should find in CMD you ip with commmand 'ipconfig'.

[cmdipConfig][cmdipConfig.img]

When you have it, you should be in the same network and you should type in your web browser the following url:

* URL:
  ```sh
  http://{{Computer IP}}:4200
  ```

Now, you should see the website in your mobile or tablet.

---

## Interfaces

#### Start design

You can see application design in my Figma project: [Ako hotel Project][figma.url].

#### Usability and accessibility

##### Usability:

In terms of usability elements, we have prioritized the user experience by setting standards to achieve user satisfaction. To do so, we will list all these elements:

  - Useful design, coupled with ease of use and quick learning.

  - Prediction of errors before actions together with feedback and methods to locate the user.

  - Wide range of actions regarding customization and interactivity with the application.

  - Consistent interface, with user-friendly attributes and a simplicity that makes it easy to use.

  - Interface structure that allows the user to feel comfortable navigating it.

The user's comfort has been prioritized at all times. For this, I have designed a simple and easy to use interface that allows the user to have everything they need at hand. In addition, I have tried to use colors that convey comfort and simplicity to the environment, observable in the color palettes below. Mentioning the color palette, I did a lot of research about a color palette that does not stray from the original one and keeps its nuances when creating the dark theme combination.

[lightPalette][lightPalette.img]

Light Palette example: 

[lightMode][lightMode.img]

Along with this palette, we have given it a darker touch to allow access to more muted shades to enhance the user experience along with their preferences.

[darkPalette][darkPalette.img]

Dark Palette example: 

[darkMode][darkMode.img]

#####  Accessibility 
  
 - Accessibility is the attribute that allows people to easily perceive, understand and navigate the web. For this, the following has been taken into account:
 
 - Contrast between the background and the color of the font to favor reading and favor visual health, also pure white is not used to avoid glare and visual fatigue.
 
 - Well-defined form fields and fonts that favor the perfect legibility of the texts.
 
 - Design adaptable to all kinds of devices.

---

## Manuals

---

## Technology stack

---

## Technology comparison

---

## Planification

---

## Conclusion

---

## Links and references

---

## Author/s

[![Jordan Jared Tejera Yánez][author-jordan.io]][author-jordan.url]

---

<!-- MARKDOWN LINKS AND IMAGES -->
[newTerminal.img]: https://github.com/JordanJTY/hotelWeb_Angular-Spring/blob/d4cb4f9eb9bf54954a635067ccc6b23664cd9cbb/frontend/src/assets/readme/guide/newTerminalVS.png
[openedIDE.img]: https://github.com/JordanJTY/hotelWeb_Angular-Spring/blob/ada4b13f2ed2209e54b033cfcbc71e222eed9b3b/frontend/src/assets/readme/guide/openedIDE.png
[createDB.img]: https://github.com/JordanJTY/hotelWeb_Angular-Spring/blob/a43cadfe54beb430b667c99907080b741f119172/frontend/src/assets/readme/guide/mySQLdbCreate.png
[changeBackendConfiguration.img]: https://github.com/JordanJTY/hotelWeb_Angular-Spring/blob/a43cadfe54beb430b667c99907080b741f119172/frontend/src/assets/readme/guide/backendConfiguration.png
[ERDiagram.img]: https://github.com/JordanJTY/hotelWeb_Angular-Spring/blob/d4cb4f9eb9bf54954a635067ccc6b23664cd9cbb/frontend/src/assets/readme/diagrams/diagramER.png
[umlDiagram.img]: https://github.com/JordanJTY/hotelWeb_Angular-Spring/blob/d4cb4f9eb9bf54954a635067ccc6b23664cd9cbb/frontend/src/assets/readme/diagrams/diagramUML.png
[relacionalDiagram.img]: https://github.com/JordanJTY/hotelWeb_Angular-Spring/blob/d4cb4f9eb9bf54954a635067ccc6b23664cd9cbb/frontend/src/assets/readme/diagrams/diagramRelational.png
[useCase.img]: https://github.com/JordanJTY/hotelWeb_Angular-Spring/blob/35410e924c5309a9063fb1cc828a84dbf5aba6fe/frontend/src/assets/readme/diagrams/useCase.png
[cmdipConfig.img]: https://github.com/JordanJTY/hotelWeb_Angular-Spring/blob/9826a5f1843b83abd3c6fb7d701c0c72fd5e91ae/frontend/src/assets/readme/cmdipConfig.png
[lightPalette.img]: 
[darkPalette.img]: 
[lightMode.img]: 
[darkMode.img]: 

[figma.url]: https://www.figma.com/file/WCxnIb2Czop1TWowRPx371/HotelAko?node-id=33%3A75&t=S61Phe0yC3oc3t7R-1

[author-jordan.io]: https://img.shields.io/badge/-Jordan%20Jared%20Tejera%20Yánez-purple?style=for-the-badge&label=author&logo=pokemon&labelColor=black
[author-jordan.url]: https://github.com/JordanJTY

[angular.io]: https://img.shields.io/badge/Frontend-Angular-red?style=flat-square&logo=angular&logoColor=red
[angular.url]: https://angular.io

[spring.io]: https://img.shields.io/badge/Backend-Spring-green?style=flat-square&logo=spring&logoColor=green
[spring.url]: https://spring.io
