// Load environment variables from .env file
import dotenv from "dotenv";

// Import the MongoDB connection function
import connectDB from "./db/index.js";

// Import the configured Express app
import { app } from "./app.js";

// Configure dotenv to load variables from the specified file
dotenv.config({
    path: './env' // Path to your .env file
});

// Connect to MongoDB and start the server once connected
connectDB()
    .then(() => {
        // Start the Express server on the specified port
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port: ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        // Log error if MongoDB connection fails
        console.log("MongoDB connection failed", err);
    });

































/*
import express from "express";
const app = express(); // Express app initialize kiya

// Immediately Invoked Async Function Expression (IIFE)
(async () => {
    try {
        //  MongoDB se connect kar rahe hain using env variable and DB name
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

        //  Agar Express app mein koi error aata hai toh usko handle karo
        app.on("error", (error) => {
            console.log("ERROR : ", error);
            throw error; // Error ko throw kar diya taaki catch block handle kare
        });

        // Server ko start kar rahe hain on given PORT
        app.listen(process.env.PORT.at, () => {
            console.log(`APP is Listening on port ${process.env.PORT}`);
        });

    } catch (error) {
        //  Agar mongoose ya server start karne mein error aaye toh yeh catch karega
        console.error("ERROR :", error);
        throw error;
    }
})();
*/  
