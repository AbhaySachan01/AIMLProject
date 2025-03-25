import mongoose from "mongoose";
import express from 'express';
import 'dotenv/config';
import cors from 'cors';

try {
    mongoose.connect(process.env.DB);
    console.log("Database Connected Successfully");
} catch (error) {
    console.log(error);
}


const app=express();
app.use(cors());
const PORT = 3000;
app.get('/',(req,res)=>{
    res.send("hello world");
})

app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
})