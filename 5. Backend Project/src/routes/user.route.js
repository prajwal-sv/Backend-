import {Router}  from "express";
import { registerUser } from "../controllers/user.controller.js";
import {asyncHandler} from "../utils/asyncHandler.js";


// Creating a new router instance to define routes
const router = Router();

// Defining a POST route for "/register"
// The registerUser function is wrapped with asyncHandler to handle errors gracefully
router.route("/register").post(asyncHandler(registerUser));

export default router;