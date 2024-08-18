# Job Listing Application

This project is a simple Job Listing application where users can browse job postings. It uses a mock backend created with `json-server`, loads data using `react-dom`, handles navigation with `react-router`, and styles the interface with `Tailwind CSS`.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Features

- Browse job listings with dynamic data loading.
- Navigate between different pages using React Router.
- Responsive and modern design with Tailwind CSS.

## Technologies Used

- **React**: For building the user interface.
- **React DOM**: For loading data from the mock backend.
- **React Router**: For managing navigation between different pages.
- **Tailwind CSS**: For styling the application with utility-first CSS.
- **json-server**: To mock a backend and serve the job listings data.

## Installation

To get started with the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/job-listing-app.git
   cd job-listing-app
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Start the json-server (mock backend):**
   The server will run on http://localhost:8000
   ```bash
   npm run server
   ```

5. **Start the React application:**
   ```bash
   npm run dev
   ```

## Usage

- The application will be running on `http://localhost:3000/`.
- Navigate through different job listings using the provided UI.
- The mock backend will be running on `http://localhost:8000/`, serving the job data.
