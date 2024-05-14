# Project Documentation

## Overview

This project is a simple user management system built using Node.js, Express, and MongoDB. It allows for adding and retrieving user data from a MongoDB database.

## Project Structure

- [`constants.js`](#file:contants.js-context): Contains constant values used throughout the project.
- [`DatabaseConnection.js`](#file:DatabaseConnection.js-context): Manages the connection to the MongoDB database.
- [`userSchema.js`](#file:userSchema.js-context): Defines the schema for the user model using Mongoose.
- [`User.js`](#file:User.js-context): Express router for handling user-related routes.
- [`User.js-1`](#file:User.js-1-context): Controller functions for adding and retrieving user data.

## Setup

To run this project, you need to have Node.js and MongoDB installed on your machine.

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies:
    - npm install

4. Create a .env file in the root directory of the project and add the following line, Also you can refer `.env.sample` file for .`env` variables , replacing <your_mongodb_uri> with your actual MongoDB URI:
    - e.g - MONGODB_URI=mongodb+srv://<`USERNAME`>:<`PASSWORD`>@cluster0.c3blipz.mongodb.net    //`Connection String`

5. Start the server:
    - npm run start:dev

## API Endpoints

- `GET /getAllUser`: Retrieves all users from the database.
  - e.g : localhost:3000/v1/getAllUser
- `POST /addUser`: Adds a new user to the database. The request body must contain `name`, `email`, `password`, and `contact` fields.
  - e.g : localhost:3000/v1/addUser

## Contributing

Contributions are welcome! Please feel free to submit a pull request or create an issue for any bugs or improvements. 

