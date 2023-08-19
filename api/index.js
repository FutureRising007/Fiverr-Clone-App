import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

const app = express();
dotenv.config();
mongoose.set('strictQuery' , true );

const connect = async () => {

    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB");
    }catch(error){
        handleError(error);
    }
} 

app.listen(8800, () => {
    connect();
    console.log("Backend server is Connected");
})

