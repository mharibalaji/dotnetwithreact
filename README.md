# Task Management System
This is a simple Task Management System built using React.js for the frontend and .NET for the backend. The application allows users to create, view, update, and delete tasks with functionalities like input validation, success/error notifications, and responsive UI. It utilizes Material-UI and Tailwind CSS for styling and an in-memory database using SQLite or Entity Framework InMemory for storing tasks.

# Features <br />
Task List: View tasks in a table format. <br />
Task Form: Add or edit tasks with fields for title, description, due date, and status. <br />
CRUD Operations: <br />
Fetch tasks from the backend. <br />
Add, edit, and delete tasks. <br />
Validation: <br />
Title and Due Date are required. <br />
Status must be one of the predefined values (Pending, In Progress, Completed). <br />
Notifications: Error and success messages are displayed for form submission and actions. <br />

# Technologies Used <br />
## Frontend <br />
React.js <br />
Material-UI <br />
Axios (for API calls) <br />

## Backend <br />
.NET 8 <br />
Entity Framework InMemory  <br />
C# Web API  <br />

# Database
Entity Framework InMemory (for in-memory database) <br />

# Setup and Installation
## Frontend (React.js) <br />
Clone the repository <br />
cd task-management-frontend <br />
Install dependencies: <br />
npm install <br />
Start the React development server: <br />
npm start <br />

## Backend (.NET)
Clone the repository: <br />
cd task-management-backend <br />
Restore the .NET dependencies: <br />
dotnet restore <br />
Run the backend API: <br />
dotnet run <br />
The backend will be running at http://localhost:5000. <br />

## Database
The application uses Entity Framework InMemory, so no database setup is required. <br />

# Running the Application <br />
Start both the frontend and backend servers. <br />
The frontend will automatically interact with the backend API. <br />
Use the username "admin" and password "password"

# Dependencies <br />
## Frontend <br />
React 18+ <br />
Axios <br />
Material-UI <br />

## Backend
.NET 8 <br />
Entity Framework InMemory <br />

# Design Decisions
Task Status: We used predefined statuses for tasks to maintain consistency (e.g., Pending, In Progress, Completed). <br />
Validation: We ensured that the Title and Due Date are required to prevent incomplete task creation. <br />
UI Framework: Material-UI and Tailwind were chosen for responsive design and easy styling. <br />

# License
MIT License - See LICENSE for more details.
