# TodoAppJC

This project is a Todo App built with a React frontend and a Node.js and MongoDB backend. It allows users to manage their tasks efficiently by adding, updating, and deleting todos. Authentication and authorization are implemented to ensure task management is restricted to authenticated users.

**Technologies Used**

**Frontend**

  -React: For building the UI components and managing state.
  -Tailwind CSS: For styling the components with utility-first CSS.
  -Axios: For handling HTTP requests to communicate with the backend.

**Backend**

  -Node.js with Express: To create RESTful APIs and handle requests.
  -MongoDB: A NoSQL database for storing user and todo data.
  -Mongoose: An ODM (Object Data Modeling) library for MongoDB, used to manage database schemas and operations.

**JWT (JSON Web Token):** For user authentication and session management.

**bcrypt:** For password hashing to secure user passwords.

**Prerequisites**

Node.js: Make sure Node.js is installed on your system.

MongoDB: Install MongoDB and ensure it’s running, or use a MongoDB cloud service like MongoDB Atlas.

npm: Ensure npm is installed, which comes with Node.js.


**Running the Backend**

**Clone the Repository:**

1.git clone - https://github.com/your-username/todo-app.git

cd todo-app

2.Navigate to the Backend Directory: cd backend


3. Install Backend Dependencies: npm install


4. Create a .env File in the backend folder and add the following:

PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret


5. Start the Backend Server:

npm start or nodemon server.js


**This will start the backend server on http://localhost:5000.**





**Running the Frontend**

1.Navigate to the Frontend Directory:

cd frontend


2.Install Frontend Dependencies:

npm install

3.Start the Frontend Development Server:

npm start





**Deployment Links:**


1. Frontend: https://todo-app-jc-frontend.vercel.app/

2. Backend: https://todo-app-jc.vercel.app/

I had deployed both Backend & Frontend on Vercel - vercel.com




**Challenges and Decisions**

1. Authentication and Security:

Challenge: Implementing secure user authentication and managing sessions without compromising user data.

Solution: Used JWT (JSON Web Tokens) for session management, hashing passwords with bcrypt, and configuring environment variables securely.


2.Frontend State Management:

Challenge: Keeping the UI state in sync with backend data, especially for user sessions and todo updates.

Solution: Utilized React hooks and state management to keep the UI responsive and updated in real time, while Axios handled async calls to the backend.


3.Error Handling:

Challenge: Handling server-side errors gracefully and providing meaningful feedback to users.

Solution: Implemented try-catch blocks in the backend, with descriptive error messages sent to the frontend for better user feedback.











