
project all addtional information
# User Management System (Angular 18 + NgRx)

A **User Management System** built with **Angular 18**, **NgRx**, and **Angular Material** that supports **CRUD operations** (Create, Read, Update, Delete) with JWT-based login authentication.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Credentials](#credentials)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Folder Structure](#folder-structure)
- [Technologies](#technologies)
- [License](#license)

---

## Project Overview

This project demonstrates a complete **user management system** with:

- **Login authentication** using hardcoded credentials and JWT
- **NgRx state management** for user data
- **Reactive Forms** for add/edit user functionality
- **Material Table** with pagination and responsive design
- CRUD operations: **Add**, **Edit**, **Delete**, **List Users**

---

## Features

- **Login Form**
  - Username: `user@gmail.com`
  - Password: `user@123`
  - Generates a dummy JWT and stores it in `localStorage`
- **User CRUD**
  - Add new user
  - Edit existing user
  - Delete user
  - List users in a **Material Table**
- **Material Table**
  - Pagination with selectable page sizes: 10, 20, 50, 100
  - Responsive for all devices
- **Form Validation**
  - Required fields: username, email, job role
  - Email format validation
- **Standalone Angular 18 Components**

---

## Credentials

- **Username:** `user@gmail.com`
- **Password:** `user@123`

---

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/user-management-system.git
cd user-management-system
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the project:**

```bash
npm run start:all
```

> The application will be available at `http://localhost:4200`.

---

## Folder Structure

```
src/
├── app/
│   ├── state/          # NgRx: actions, reducers, selectors
│   ├── login/          # Login component with JWT
│   ├── user-form/      # Add/Edit User form component
│   ├── user-list/      # User table component with pagination
│   ├── dashboard/      # Dashboard page
│   └── app.module.ts
```

---

## Technologies Used

- Angular 18 (Standalone Components)
- NgRx (State Management)
- Angular Material (UI Components)
- Reactive Forms
- TypeScript & SCSS

---

## How to Use

1. Open the application in your browser.
2. Login using the credentials above.
3. Add, edit, or delete users.
4. Use the table pagination for navigating users.
5. JWT is stored in localStorage to simulate authentication.

---

## License

MIT License © 2025


# NgrxUsermanagementApp


This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
