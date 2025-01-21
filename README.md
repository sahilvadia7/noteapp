# NoteApp

NoteApp is a simple note-taking web application built using **React** for the frontend and **Spring Boot** for the backend. Users can create, view, update, and delete notes with an elegant and easy-to-use interface.

## Features

- **User-friendly Interface**: The frontend is built with React and Material-UI for a sleek design.
- **CRUD Operations**: Users can add, edit, delete, and view notes.
- **Spring Boot Backend**: The backend is powered by Spring Boot and provides a robust API for note management.
- **OAuth Authentication**: Allows users to sign in with their Google or GitHub accounts.

## Technologies Used

### Frontend:
- **React.js**
- **Material-UI**
- **Axios** for HTTP requests

### Backend:
- **Spring Boot**
- **Spring Security** for authentication
- **OAuth2** for Google and GitHub login
- **PostgreSQL** (or H2, MySQL) for data storage

## Getting Started

### Prerequisites

- Java 11 or later
- Node.js (for frontend)
- Maven (for backend)

### Setup Instructions

#### 1. Backend (Spring Boot)

1. Clone the repository:
   git clone https://github.com/sahilvadia7/noteapp.git

2. Navigate to the backend folder:
    cd noteapp/backendNoteapp

3. Build the backend:
    mvn clean install

4. Run the backend:
    mvn spring-boot:run

#### 2. Frontend (React)

1. Navigate to the frontend folder:
    cd noteapp/notepad
2. Install dependencies:
    npm install
3. Start the frontend:
    npm start
4. Running the App
    The frontend will be available at http://localhost:3000.
    The backend API will be available at http://localhost:8080.

You can now start using the NoteApp to manage your notes!

### Contributing

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make changes and commit them (git commit -am 'Add feature').
4. Push to the branch (git push origin feature-branch).
5. Open a pull request.


## License

This project is licensed under the MIT License - see the LICENSE file for details.


### Key Notes:
- Replace the repository URL with the correct GitHub link.
- Modify folder names like `backendNoteapp` and `notepad` to match your project structure.
- Feel free to expand on sections as you add more features to the app.
