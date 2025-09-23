import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB =  async () =>{

try { 

    const connectionsInstance =await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

    console.log(`\n MONGODB connected !! DB HOST : ${connectionsInstance.connection.host}`)
    
} catch (error) {

    console.log("MONGODB connection error",error)
    process.exit(1)
    
}


}

export default connectDB ;



















