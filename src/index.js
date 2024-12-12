import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Adjust the path to your App component

// Get the root DOM element
const rootElement = document.getElementById('root');

// Create a root and render the App component
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
