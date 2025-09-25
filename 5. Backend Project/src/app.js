import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express(); // Initialize Express app

// Enable CORS to allow frontend-backend communication
app.use(cors({
    origin: process.env.CORS_ORIGIN, // Allowed origin from environment variable
    credentials: true // Allow cookies and authorization headers
}));

// Parse incoming JSON requests with a size limit
app.use(express.json({ limit: "16kb" }));

// Parse URL-encoded data (form submissions) with extended support
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Serve static files from the "public" directory
app.use(express.static("public"));

// Parse cookies from incoming requests
app.use(cookieParser());

// Export the configured Express app







// routes  import

// Importing the userRouter which contains all user-related route definitions
import userRouter from "./routes/user.route.js";

// Declaring routes
// This is a standard practice for mounting route modules in Express
app.use("/api/v1/users", userRouter);

// Now you can access the registration endpoint at:
// http://localhost:8000/api/v1/users/register

 
export { app };