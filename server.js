// Import the Express library
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port number where the server will listen for requests
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route for the API endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
