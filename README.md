# Task Tracker

Task Tracker is a full-stack application designed to help you manage your tasks efficiently. It utilizes the PERN stack (PostgreSQL, Express.js, React, Node.js) for robust and scalable performance.
Live site: https://task-tracker-ochre-one.vercel.app/

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Environment Variables](#environment-variables)
  - [Running the Backend](#running-the-backend)
  - [Running the Frontend](#running-the-frontend)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create and read tasks.
- User-friendly interface for task management.
- Responsive design for various devices.

## Technologies Used

**Frontend (View):**

- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite:** A fast build tool for modern web projects.
- **Redux Toolkit:** Official, opinionated, batteries-included toolset for efficient Redux development.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.

**Backend (Server):**

- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js:** A fast, unopinionated, minimalist web framework for Node.js.
- **TypeScript:** A typed superset of JavaScript.
- **Supabase:** An open-source Firebase alternative providing a PostgreSQL database, authentication, and more.

## Project Structure

The project follows a modular structure:

task-tracker/

    ├── server/         # Backend (Node.js, Express, TypeScript)
    ├── view/           # Frontend (React, TypeScript, Redux ToolKit, TailwindCss, Vite)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (LTS version recommended)
- [npm](https://www.npmjs.com/get-npm) or [Yarn](https://yarnpkg.com/getting-started/install)

### Environment Variables

The backend requires specific environment variables to function correctly.

#### Backend (`server/.env`)

Create a `.env` file in the `server/` directory and add the following variables:
PORT=9000
SUPABASE_URL=https://jrhlmgpncpmqchyblixs.supabase.co
SUPABASE_API_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyaGxtZ3BuY3BtcWNoeWJsaXhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1NzQ5ODMsImV4cCI6MjA2NjE1MDk4M30.u_P_FuPTUMb3UG_4cB2kRmgdoXTYk4FtSKjicG_nbHo
SUPABASE_TABLE_NAME=Tasks

**Note:** The `SUPABASE_API_KEY` provided here is a public key. For a production environment, you should consider using a service role key for backend operations that require more elevated permissions, and manage your API keys securely.

### Running the Backend

1.  Navigate to the `server/` directory:
    ```bash
    cd task-tracker/server
    ```
2.  Install the backend dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  Start the backend server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The backend server will run on `http://localhost:9000` (or the port specified in your `.env` file).

### Running the Frontend

1.  Navigate to the `view/` directory:
    ```bash
    cd task-tracker/view
    ```
2.  Install the frontend dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  Start the frontend development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The frontend application will typically open in your browser at `http://localhost:3000` (or a similar port provided by Vite).

## Usage

Once both the backend and frontend servers are running, you can access the Task Tracker application in your web browser. You'll be able to:

- Add new tasks with its duration.
- View a list of all your tasks.

## Future Improvemetns
- Add the full CRUD operations (Edit and Delete)
- Add a live timer to keep track of the duration

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

