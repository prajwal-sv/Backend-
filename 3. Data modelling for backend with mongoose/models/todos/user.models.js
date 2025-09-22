// step 1: import mongoose
import mongoose  from "mongoose";
// step 2: create schema and store it in a instance of it 
const userSchema = new mongoose.Schema(
    {
        // professional approche creating the data feild

        username:{
            type : String ,
            required :  true ,
            unique : true ,
            lowercase : true
        },
        email:{
            type : String ,
            required :  true ,
            unique : true ,
            lowercase : true

        },
        password :{
            type : String ,
            required : true
        }

    },
    { timestamps: true }

)

// step 3:  create a model and export it new insatnce
export const User =  mongoose.model("User", userSchema)


