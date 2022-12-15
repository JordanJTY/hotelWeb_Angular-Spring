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
- [Installation guide](#installation-guide)
- [Requirements](#requirements)
- [Data model](#data-model)
- [Use Cases](#use-cases)
- [Usability and accessibility](#usability-and-accessibility)
- [Author](#Author/s)

    </ol>
</details>

## About this project

### Why I did it?

When I was thinking about what application to do, I remembered that I had never asked for an apartment reservation in my whole life. Also, I live on a tourist island, so I decided to research these services to find out how they work when people order an apartment.

---

## Installation guide

#### Requirements

- Eclipse IDE o IntelliJ IDEA.
- MySQL Workbench.
- PostMan, for RESTFul tests.
- Visual Studio Code.

### Get started 

#### Frontend

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

#### Backend

[![Spring][spring.io]][spring.url]

To get started, open the backend of the project with the IDE of your choice. In my case, I used IntelliJ.

![openedIDE][openedIDE.img]

Once you have the backend open, go to MYSQL Workbench and check your username and password to access in your IDE. Also, take advantage of this opportunity to create a database where you save your data with the name you prefer:

![createDB][createDB.img]

Once these steps are done, you can start your backend without first configuring your application properties with your database name and MySQL password.

![changeBackendConfiguration][changeBackendConfiguration.img]

Remember start your frontend!

* Run your frontend
    ```sh
    cd frontend/

    ng serve -o
    ```

---

## Requirements

##### Platform:
- **P1**.This app comes as a web app as it is understood to be made to be used in the workplace.
- **P2**.In any case, it can also be used on mobile or tablet devices since it is responsive.

##### Access:
- **A1**. The app has a guest screen that can be accessed without being logged in.
- **A2**. In order to use the page you must be registered as a doctor, an administrator will be in charge of registering the doctors previously.
- **A3**. To add, delete or modify the information of the doctors you must be an administrator.

##### Interfaces:

- **I1**.The app has 2 main interfaces that show lists of both patients and prescriptions.
- **I2**. The user registration and doctor registration interfaces will be available only for administrators.
- **I3**. In the main interfaces it will be possible to search patients by name.

##### Actions:

- **A1**.User actions will be accompanied by feedback andnotifications.
- **A2**. When entering data in the form, it is validated that the information is entered correctly, notifying the user if there is an error.

##### Validations:

---

## Data model

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
  - FK:Apartment_ID: Identification number of apartment selected by user.
  - FK:AppUser_ID: Identification number of user who order a reservation.
  
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

## Use cases.

Below we can see the use case diagram, this is reduced to the actions that the doctor (main user of the application) and the administrator (in charge of adding or removing doctors from the system) can perform.

![UseCaseDiagram](https://user-images.githubusercontent.com/95490721/207313239-b5bb35f6-f40c-454c-b18f-7b6042d1e24b.jpg)

As we can see in the image, when consulting a prescription, the doctor can modify, update or delete it, the same can be done with his patients.

In the case of the administrator, its only function is to consult the doctors that are in the system, delete them, modify them or introduce new ones.

---

## Usability and accessibility

###### Usability:
 
Regarding usability elements, we have a clear and simple clean design, adapted to all users. We recognize a color palette that is familiar to us from the medical field, but at the same time modern, including warmer colors.
 
 ![image](https://user-images.githubusercontent.com/95490721/206919510-3532a341-430c-4ce6-9c65-82e21cab3b7b.png)

 ![image](https://user-images.githubusercontent.com/95490721/206919497-a95362e0-3cf4-4acf-a469-a624acac2428.png)

![image](https://user-images.githubusercontent.com/95490721/206919999-6e7ff21b-3312-4766-83c4-27e6abe0409d.png)
 
 - Easy to understand, the user does not need more than three clicks to reach his goal with minimal effort. In addition, essential information is visible and clear.
 
 - Elegant in its design, it favors the user's perception, the soft colors of its interface and the homogeneity make the end user feel attracted to the product.
 
 - The user is able to interact with the application thanks to its elegant and simple design, overloading is avoided, which makes it difficult for users to easily navigate through applications.
 
 - Feedback and appropriate responses to user actions through messages and alerts
 
 - Clean layout of windows to create a seamless visual flow of information for the user.
 
 - Consistent interface, basic operations are intuitive and all done in the same way.
 
 - Clear and harmonious interface structure, menus and windows are consistent with each other.
 
 - Easy navigation through the page, both with mouse and keyboard.
 
 
######  Accessibility 
  
 - Accessibility is the attribute that allows people to easily perceive, understand and navigate the web. For this, the following has been taken into account:
 
 - Contrast between the background and the color of the font to favor reading and favor visual health, also pure white is not used to avoid glare and visual fatigue.
 
 - Well-defined form fields and fonts that favor the perfect legibility of the texts.
 
 - Design adaptable to all kinds of devices.

---

## Author/s

[![Jordan Jared Tejera Yánez][author-jordan.io]][author-jordan.url]

---

<!-- MARKDOWN LINKS AND IMAGES -->
[newTerminal.img]: https://github.com/JordanJTY/hotelWeb_Angular-Spring/blob/d4cb4f9eb9bf54954a635067ccc6b23664cd9cbb/frontend/src/assets/readme/guide/newTerminalVS.png
[openedIDE.img]: https://github.com/JordanJTY/hotelWeb_Angular-Spring/blob/ada4b13f2ed2209e54b033cfcbc71e222eed9b3b/frontend/src/assets/readme/guide/openedIDE.png
[createDB.img]: https://github.com/JordanJTY/hotelWeb_Angular-Spring/blob/d4cb4f9eb9bf54954a635067ccc6b23664cd9cbb/frontend/src/assets/readme/guide/mySQLdbCreate.png
[changeBackendConfiguration.img]: https://github.com/JordanJTY/hotelWeb_Angular-Spring/blob/d4cb4f9eb9bf54954a635067ccc6b23664cd9cbb/frontend/src/assets/readme/guide/backendConfiguration.png
[ERDiagram.img]: https://github.com/JordanJTY/hotelWeb_Angular-Spring/blob/d4cb4f9eb9bf54954a635067ccc6b23664cd9cbb/frontend/src/assets/readme/diagrams/diagramER.png
[umlDiagram.img]: https://github.com/JordanJTY/hotelWeb_Angular-Spring/blob/d4cb4f9eb9bf54954a635067ccc6b23664cd9cbb/frontend/src/assets/readme/diagrams/diagramUML.png
[relacionalDiagram.img]: https://github.com/JordanJTY/hotelWeb_Angular-Spring/blob/d4cb4f9eb9bf54954a635067ccc6b23664cd9cbb/frontend/src/assets/readme/diagrams/diagramRelational.png

[author-jordan.io]: https://img.shields.io/badge/-Jordan%20Jared%20Tejera%20Yánez-purple?style=for-the-badge&label=author&logo=pokemon&labelColor=black
[author-jordan.url]: https://github.com/JordanJTY

[angular.io]: https://img.shields.io/badge/Frontend-Angular-red?style=flat-square&logo=angular&logoColor=red
[angular.url]: https://angular.io

[spring.io]: https://img.shields.io/badge/Backend-Spring-green?style=flat-square&logo=spring&logoColor=green
[spring.url]: https://spring.io
