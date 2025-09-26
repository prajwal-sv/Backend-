import {Router}  from "express";
import { registerUser } from "../controllers/user.controller.js";
import {asyncHandler} from "../utils/asyncHandler.js";

import { upload } from "../middlewares/multer.middleware.js";



// Creating a new router instance to define routes
const router = Router();

// Defining a POST route for "/register"
// The registerUser function is wrapped with asyncHandler to handle errors gracefully
router.route("/register").post(
    upload.fields([
        {name :  "avatar " ,
            maxCount:1 
        } ,
        {
            name: "coverImage",
            maxCount: 1 
        }
    ]) ,
    
    registerUser);

export default router;