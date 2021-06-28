# Asssignment for the Software Developer with UNDP RBAP Bangkok

This assignment code consists of a responsive frontend (Angular JS version 12 with Bootstrap 4 CSS) 
with backend (Spring Boot) applications.

Notes:
- The backend and frontend communication is secured by JWT OAuth protocol. Endpoints are secured according
to the user roles i.e. ROLE_USER, ROLE_MANAGER, ROLE_DIRECTOR
  
- User passwords are stored encrypted in H2 in-memory database. Use below accounts to see
relevant screens for each role:
  
    Normal Registered User:
    username:user
    password:userpassword
    
    username:manager
    password:managerpassword
    
    username:director
    password:directorpassword

- The application uses H2 in-memory database as data source.
Some initial data such as initial users with different roles, user to role bindings etc. are initialised
into the H2 in-memory DB once the backend application starts. It uses the data.sql file under resources
directory. Since the Spring boot application uses JPA and Spring Data, it automatically handles management
of tables and columns.
  H2 console can be inspected from http://localhost:8080/h2-console that's secured by below:
  JDBC url: jdbc:h2:mem:testdb
  username:sa
  password:dummypassword
  
Screenshot of the login to H2 console:

![H2 Console Login Screenshot](/h2_console.png?raw=true "H2 Console Login Screenshot")
  
You can inspect the data (e.g. Team's statuses) in the DB by logging on from the H2 console.

-  The application has pages/views specific to the user roles and some dummy content returned from the backend
just to illustrate how to achieve these in Angular.
   
- The frontend Angular part has the required simplified unit tests.

- The application changes the statuses of the Teams as requested by the assignment.
First Login using the desired role account from the previous steps (ROLE_USER and unauthorized users cannot see the Team Status table on Home page. You need to login with the users having either ROLE_MANAGER or ROLE_DIRECTOR). Then navigate back to the Home page
to be able to change Team statuses.
  
In the below screenshot you can see the 4 teams inserted by the data.sql script from the backend application
that initially has 'NOT_ASSIGNED' as status (img 1) and then later relevant director/manager user can update the
status on their corresponding columns (img 2).

![Initial Team Statuses - 1](/initial_team_statuses.png?raw=true "Initial Team Statuses - 1")

![Initial Team Statuses - 2](/team_statuses_after_update.png?raw=true "Initial Team Statuses - 2")

Attribution:
Icons used in this app are made by Freepik from www.flaticon.com and the relevant reference is given on the app too
to abide by the licensing conditions.

## 1. Backend

Run the backend using maven wrapper in the project under backend folder:

`mvnw spring-boot:run`

## 2. Frontend Part

This skeleton of this project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2
as boilerplate code and can easily be managed by Angular CLI commands.

Note: Frontend application expects the backend application to be running at localhost:8080. If you change
this, you need to change in the environments.ts and environments.prod.ts too.

### Development server

Run `npm install` to install the dependencies.

Then, run `npm start` for a dev server that runs on 8081.
Navigate to `http://localhost:8081/`.
The app will automatically reload if you change any of the source files.

If you need to change the port, you can change in package.json file under frontend folder.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running Production Build

I've already built the source code for you and pushed the frontend/dist folder to the Github repo.
If you need to rebuild:

`ng build` can rebuild the project.

After having the production build, you can place the contents of the 'UNDPRBAPBangkokAssignment' folder
onto your ISS/Nginx or any other web application server to run the HTML/Javascript application.
