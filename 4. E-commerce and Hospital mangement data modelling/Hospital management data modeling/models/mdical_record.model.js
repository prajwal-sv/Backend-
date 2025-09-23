import mongoose from "mongoose";



const medicalREcordSchema = new mongoose.Schema({
      
      patient: {
    type: mongoose.Schema.ObjectId,
    ref: "Patient",
    required: true,
  },
  doctor: {
    type: mongoose.Schema.ObjectId,
    ref: "Docter",
    required: true,
  },
  hospital: {
    type: mongoose.Schema.ObjectId,
    ref: "Hospital",
    required: true,
  },
  diagnosis: {
    type: String,
    required: true,
  },
  treatment: {
    type: String,
    required: true,
  },
  prescription: {
    type: String,
  },
  followUpDate: {
    type: Date,
  },




},{timestamps: true})


export const  MedicalRecord = mongoose.model('MedicalRecord' , medicalREcordSchema)