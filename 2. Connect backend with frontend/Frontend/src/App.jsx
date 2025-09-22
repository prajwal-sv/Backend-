// Import React hooks: useEffect and useState
import { useEffect, useState } from 'react'

// Import CSS file for styling
import './App.css'

// Import axios for making HTTP requests
import axios from 'axios' ;

function App() {
  // Create a state variable 'jokes' and a function 'setjokes' to update it
  const [jokes, setjokes] = useState([])

  // useEffect runs once when the component mounts
  useEffect(() => {
    // Make a GET request to the jokes API
    axios.get('/api/jokes')
      .then((response) => {
        // Store the received jokes in the state
        setjokes(response.data)
      })
      .catch((error) => {
        // Log any errors that occur during the request
        console.log(error)
      })
  }, []) // Empty dependency array means this effect runs only once

  return (
    <>
      {/* Heading of the website */}
      <h1>This is a jokes website</h1>

      {/* Display the total number of jokes */}
      <p>JOKES: {jokes.length}</p>

      {/* Loop through the jokes array and display each joke */}
      {
        jokes.map((joke) => (
          <div key={joke.id}>
            {/* Display the joke title */}
            <h3>{joke.title}</h3>

            {/* Display the joke content */}
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

// Export the App component so it can be used in other files
export default App