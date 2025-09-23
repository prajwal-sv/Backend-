import mongoose from "mongoose";



const DocterSchema = new mongoose.Schema({
   
    name:{
        type : String ,
        required : true 
    },
     salary:{
        type : String ,
        required : true 
    },
     qualification :{
        type : String ,
        required : true 
    },
    experienceInYears:{
        type : Number ,
        default : 0 
    },
     worksInHospital:{
        type : mongoose.Schema.ObjectId,
        ref : "hospital",
        required : true 
    },


},{timestamps: true})


export const  Docter = mongoose.model('Docter' , DocterSchema)