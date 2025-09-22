// Import the Express module
import express from 'express';

// Create an instance of an Express application
const app = express();

// Define a route for the root URL ("/")
// This will respond with a simple message when someone accesses the homepage
// app.get('/', (req, res) => {
//     res.send('server is rady'); // Typo: "rady" should be "ready"
// });

// Define a route for "/jokes"
// This will send back an array of joke objects when accessed
app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Atomic Humor",
      content: "Why don't scientists trust atoms? Because they make up everything!"
    },
    {
      id: 2,
      title: "Scarecrow Superstar",
      content: "Why did the scarecrow win an award? Because he was outstanding in his field!"
    },
    {
      id: 3,
      title: "Buggy Nature",
      content: "Why don't programmers like nature? It has too many bugs."
    },
    {
      id: 4,
      title: "Sad Math Book",
      content: "Why did the math book look sad? Because it had too many problems."
    },
    {
      id: 5,
      title: "Parallel Lines",
      content: "Parallel lines have so much in common… it’s a shame they’ll never meet."
    }
  ];

  // Send the jokes array as the response
  res.send(jokes);
});

// Define the port number to listen on
// It uses the environment variable PORT if available, otherwise defaults to 3000
const port = process.env.PORT || 3000;

// Start the server and listen on the defined port
// Logs a message to the console once the server is running
app.listen(port, () => {
    console.log(`server running on ${port}`);
});