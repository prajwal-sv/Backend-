// 📦 Importing Express module (backend framework)
const express = require('express')

require('dotenv').config()

// 🔧 Defining the port number (server will run on this port)
const port = 3000

// 🚀 Creating an Express application instance
const app = express()

// 📍 Defining a GET route for the root URL ('/')
// Jab koi user '/' pe request karega, yeh response bhejega
app.get('/', (req, res) => {
    res.send('hellow everyone') // 👋 Sending a simple text response
})
app.get('/login', (req , res)=>{



    res.send('welcome to login ')
    

})
// 🏁 Starting the server and listening on the defined port
// Server start hone ke baad console pe message print hoga
app.listen(process.env.PORT, () => {
    console.log(`example app listening on port ${port}`)
})

