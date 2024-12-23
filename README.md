
## Project Overview

This is a Task Manager web application where users can:

- Log in using a username and password (JWT authentication).
- Add new tasks.
- View tasks in a list.
- Edit and delete tasks.

The backend is built with Express.js, MongoDB, and JWT authentication. The frontend is built with React.js, and it communicates with the backend through HTTP requests.



- **Frontend**: React.js, Axios (for HTTP requests), CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Token)
- **Other Dependencies**:
  - `body-parser`: Middleware to parse incoming request bodies.
  - `cors`: Middleware to enable cross-origin requests.
  - `express`: Web framework for Node.js to handle HTTP requests.
  - `jsonwebtoken`: Library for creating and verifying JWTs.
  - `mongodb` and `mongoose`: MongoDB database and Mongoose ORM for MongoDB.
 ## Running the Application Locally

To run both the frontend and backend locally, follow these steps:

### 1. **Run the Backend (Server)**

1. Navigate to the `backend` directory:

   cd backend

2. Install backend dependencies:
 
   npm install

3. Start the backend server:
   node server.js
    backend will run on http://localhost:5000

### 2. **Run the Frontend (React)

1. Navigate to the client directory:

   cd client

2. Install frontend dependencies:

   npm install

3. Start the React development server:

   npm start

The frontend will run on http://localhost:3000.
3. Accessing the Application

The frontend will be accessible at http://localhost:3000.
The backend will be accessible at http://localhost:5000.

4. Login Credentials

5. To log in to the application, use the following credentials:

Username: admin@123
Password: test123

Once logged in, you can manage your tasks (view, add, edit, delete).

### Summary of Commands to Run:

1. **Backend**:
   - `cd server` (navigate to the backend folder)
   - `npm install` (install backend dependencies)
   - `node server.js` (start the backend)

2. **Frontend**:
   - `cd client` (navigate to the frontend folder)
   - `npm install` (install frontend dependencies)
   - `npm start` (start the frontend)



