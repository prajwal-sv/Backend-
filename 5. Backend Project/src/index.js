
import dotenv from "dotenv"

import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB()
































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
