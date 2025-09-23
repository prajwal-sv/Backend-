import mongoose from "mongoose";



const patientSchema = new mongoose.Schema({

 name :{
    type : String,
    required : true,
  },
   diagonsedwith :{
    type : String,
    required : true,
  },
   address:{
    type : String,
    required : true,
  },
   age:{
    type : Number,
    required : true,
  },
   bloodGroup :{
    type : String,
    required : true,
  },
   gender :{
    type : String,
    required : true,
    enum : ["M","F","O"]
  },
  addmittedIn:{
    type :mongoose.Schema.ObjectId,
    ref:'Hospital'
  }

},{timestamps: true})
 

export const  Patient = mongoose.model('Patient' , patientSchema)