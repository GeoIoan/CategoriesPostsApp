# Categories-Posts App

## Overview

Categories-Posts App is a Node.js and MariaDB-based application designed for efficient category and post management. It provides functionality for creating categories and posts, ensuring organized content management within the app.

## Application Architecture

### Model Directory

Within the "model" directory, you'll find definitions for two core entities: "Categories" and "Posts." These models serve as the foundation for data representation within our application.

### Controllers Directory

The "controllers" directory contains individual controller files for each entity - "Categories" and "Posts." These controllers are responsible for executing CRUD operations specific to their respective entities, ensuring seamless data management within the app.

### Routers Directory

In the "routers" directory, you'll discover router files dedicated to "Categories" and "Posts" entities. These routers act as entry points to trigger CRUD actions performed by the controllers. They define the routes and actions that can be performed within the application.

### index.js

In the "index.js" file, we centralize and configure all the necessary middleware components for the proper functioning of our application. These middleware components encompass authentication, validation, error handling, and more.

### connect.js

The "connect.js" file makes the connection with the MariaDB database, ensuring that the app can efficiently store and retrieve category and post data.

## Dependencies

- **dotenv (^0.0.2):** The dotenv library is used for managing environment variables and application configuration. It allows you to load settings, such as API keys, database connection strings, and other environment-specific values from a .env file into your application. These variables can be accessed throughout your code, enabling you to securely store and manage sensitive data without hardcoding it directly into your source files.

- **express (^4.18.2):** Express is a widely used Node.js web application framework. It serves as the core of your application's server and routing, enabling you to create routes, handle requests, and define middleware for building the HTTP endpoints for your API.

- **express-validator (^7.0.1):** Express-validator is a middleware for Express that helps validate and sanitize request data, ensuring that data submitted through API requests is valid and safe.

- **mysql (^2.18.1):** The "mysql" dependency is a Node.js MySQL driver, indicating that your application uses a MariaDB database for data storage and retrieval.

- **typeorm (^0.3.17):** TypeORM is an Object-Relational Mapping (ORM) library for TypeScript and JavaScript. It allows you to work with databases using TypeScript classes and entities, making it easier to define data models and handle database operations.

- **nodemon (^3.0.1):** Nodemon is a development dependency used to monitor changes in your source code files. It automatically restarts your Node.js application whenever you make changes, which is especially helpful during development.

## Getting Started

To set up and run the Categories-Posts App on your local machine, follow these steps:

1. Clone this repository to your local machine.

2. Install the project dependencies using `npm install`.

3. Create a .env file with your environment-specific configuration, including database connection details and any other sensitive data.

4. Start the application using `npm start` or `npm run dev` (if you prefer using Nodemon during development).

Your application will be accessible at `http://localhost:3000`.

## Summary

In summary, our application follows a Service-Oriented Architecture (SOA) with a focus on the "model," "controllers," and "routers" directories, along with key configurations in "index.js" and "connect.js." It offers CRUD functionality for both "Categories" and "Posts" entities, maintaining a robust and organized structure.

Feel free to modify and expand this readme to include any additional information, usage instructions, or other details relevant to your project.
