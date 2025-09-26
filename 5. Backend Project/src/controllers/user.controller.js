import {asyncHandler} from '../utils/asyncHandler.js'; 

import {ApiError} from '../utils/ApiError.js'

import {User} from "../model/user.model.js"

import {uplodOnCloudnary} from "../utils/cludnary.js"
import { ApiResponse } from '../utils/ApiResponce.js';
// Wrapping the async function with asyncHandler to catch and forward errors automatically
const registerUser = asyncHandler(async (req, res) => {


    //steps: 
  // get user deatils from frontend 
  //validations - not empty
  //check if user already exist : check using username and email

  //check for images , check for avatar 

    // upload them in cloudnary : image and avtar 
   // create user object  - creat entry in db 
   // remove password and refresh token field from response 
   // check fro useer creations 
   // return response  

   const {email , username , fullName , password }= req.body


    console.log("email : ", email);
if (
    [fullName , email ,username ,password].some((field)=>
        field?.trim() === "")
) {
    throw new ApiError(400 , "all feilds are required")
    
}

const existedUser =  User.findOne({
    $or : [{username} , {email}]
    
})
if(existedUser){
    throw new ApiError(409 , "user with email or username already exists")
}

const avatarLocalPath =  req.files?.avatar[0]?.path ;
const coverImageLocalPath = req.files?.coverImage[0]?.path;

if(!avatarLocalPath){

    throw new ApiError(400,"avatar file si required")

}


const avatar =  await uplodOnCloudnary(avatarLocalPath)
 

const coverImage =  await uplodOnCloudnary(coverImageLocalPath)
  if (!avatar){
    throw new ApiError(400,"avatar file si required")

    
  }



  const user =  await User.create({
    fullName ,
    avatar : avatar.url ,
    coverImage : coverImage?.url || "",
    email ,
    password ,
    username : username.toLowerCase()


  })

 const createdUser =   await User.findById(user._id).select(
    "-password -refreshToken "
 )


 if(!createdUser){

    throw new ApiError(500 , "Somthing went wrong while registering the user ")

 }


 return res.status(201).json(
    new ApiResponse(200 , createdUser , "User register Sussessfuly")
 )
    
});

export{ registerUser ,}