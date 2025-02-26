import mongoose from "mongoose"


import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// connect to database
const connectDB = async () => {
    try{
       await mongoose.connect(process.env.MONGO_URI ); 
     
    console.log("database connected successfully!!")
    } catch (error){
        console.log("mongodb connection error " , error);  
       
       
    } 
}

export default connectDB;