# NoteApp

NoteApp is a simple yet powerful note-taking web application built using **React** for the frontend and **Spring Boot** for the backend. It allows users to create, view, update, and delete notes with an elegant and intuitive interface.

## Features

- **User-Friendly Interface**: Built with **React** and **Material-UI** for a sleek and responsive design.
- **CRUD Operations**: Create, Read, Update, and Delete notes seamlessly.
- **Spring Boot Backend**: A robust REST API powered by **Spring Boot** for note management.
- **Database Support**: Uses **PostgreSQL** (or H2/MySQL) for reliable data storage.

#### Upcoming
- **OAuth Authentication**: Secure login using **Google** or **GitHub** accounts.

---

## Technologies Used

### Frontend:
- **React.js**: For building the user interface.
- **Material-UI**: For pre-designed, responsive UI components.
- **Axios**: For making HTTP requests to the backend.

### Backend:
- **Spring Boot**: For building the RESTful API.
- **Spring Security**: For authentication and authorization.
- **PostgreSQL**: As the primary database (can be replaced with H2 or MySQL).

### upcoming
- **OAuth2**: For integrating Google and GitHub login.


---

## Getting Started

### Prerequisites

- **Java 11 or later**: For running the Spring Boot backend.
- **Node.js**: For running the React frontend.
- **Maven**: For building the Spring Boot project.
- **Docker** (optional): For containerized deployment.

---

### Setup Instructions

#### 1. Backend (Spring Boot)

1. Clone the repository:
   ```bash
   git clone https://github.com/sahilvadia7/noteapp.git
   ```

2. Navigate to the backend folder:
   ```bash
   cd noteapp/backendNoteapp
   ```

3. Build the backend:
   ```bash
   mvn clean install
   ```

4. Run the backend:
   ```bash
   mvn spring-boot:run
   ```

   The backend will start at `http://localhost:8080`.

#### 2. Frontend (React)

1. Navigate to the frontend folder:
   ```bash
   cd noteapp/notepad
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend:
   ```bash
   npm start
   ```

   The frontend will be available at `http://localhost:3000`.

---

### Running the App

- **Frontend**: Access the app at `http://localhost:3000`.
- **Backend API**: The backend API is available at `http://localhost:8080`.

You can now start using **NoteApp** to manage your notes!

---

## Docker Deployment (Optional)

To run the app using Docker:

1. Ensure Docker is installed on your machine.
2. Navigate to the project root directory:
   ```bash
   cd noteapp
   ```
3. Build and start the containers:
   ```bash
   docker-compose up --build
   ```
4. Access the app:
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:8080`

---

## Contributing

Contributions are welcome! Here’s how you can contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Make your changes and commit them:
   ```bash
   git commit -am 'Add a new feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch
   ```
5. Open a **Pull Request** and describe your changes.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---
