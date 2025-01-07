# Full Stack Wormhole Security Dashboard

This project is a full-stack application that provides a dashboard for monitoring threats related to Wormhole Smart Contracts. It consists of a backend built with Node.js and a frontend developed using React.

## Project Structure

```
full-stack-app
├── backend
│   ├── src
│   │   ├── index.js          # Entry point for the backend application
│   │   └── mockData.js       # Mock data for simulating contract activity
│   ├── package.json           # Backend dependencies and scripts
│   └── README.md              # Documentation for the backend
├── frontend
│   ├── public
│   │   └── index.html         # Main HTML file for the React application
│   ├── src
│   │   ├── App.css            # CSS styles for the frontend
│   │   ├── App.js             # Main component of the React application
│   │   ├── index.js           # Entry point for the React application
│   │   └── components
│   │       └── LineChart.js   # LineChart component for displaying data
│   ├── package.json           # Frontend dependencies and scripts
│   └── README.md              # Documentation for the frontend
└── README.md                  # Documentation for the entire project
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Backend Setup

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the backend server:
   ```
   npm start
   ```

   The backend will run on `http://localhost:8080`.

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the frontend application:
   ```
   npm start
   ```

   The frontend will run on `http://localhost:3000`.

## Usage

- The dashboard displays threat data in real-time using WebSocket communication.
- Users can set an alert threshold for threat levels and validate contract addresses.

## License

This project is licensed under the MIT License.