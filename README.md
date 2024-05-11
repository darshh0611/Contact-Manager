# User Authentication API with Express and MongoDB
# 1. Overview
This project is a User Authentication API built using Express.js, MongoDB, and JSON Web Tokens (JWT). It provides a secure and scalable solution for managing user registration, login, and authentication in web applications.

# 2. Key Features
User Registration: Register new users with unique usernames, email addresses, and passwords. Passwords are securely hashed before being stored in the database.

User Login: Authenticate registered users by verifying their email and password credentials. Upon successful login, users receive a JSON Web Token (JWT) for accessing protected routes.

Current User Information: Fetch the details of the currently authenticated user based on their JWT token. This allows for personalized user experiences and access control.

# 3. Technologies Used
Express.js: Fast, unopinionated, and minimalist web framework for Node.js, providing a robust set of features for building web applications and APIs.

MongoDB: A popular NoSQL database for storing user information, offering flexibility and scalability for handling large volumes of data.

bcrypt: A library for securely hashing passwords, ensuring that user credentials are protected against unauthorized access.

JSON Web Tokens (JWT): A compact, URL-safe means of representing claims between two parties, widely used for authentication and authorization in web applications.

# 4. Getting Started
To use this API, follow these steps:

Clone the Repository: Clone this repository to your local machine using Git or download the ZIP file directly.

Install Dependencies: Install the necessary dependencies by running npm install in the project directory.

Set Up Environment Variables: Create a .env file in the root directory and configure environment variables for the MongoDB URI and JWT secret.

Start the Server: Start the Express server by running npm start. The API will be accessible at http://localhost:5000 by default.

# Privacy
All right reserved @darshh0611 © 2024.

