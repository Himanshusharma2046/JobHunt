import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
dotenv.config({});





const app=express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions={
    origin:'http//localhost:5173',
    credentials:true
}

const PORT=process.env.PORT || 3000;

app.listen(PORT ,()=>{
    connectDB();
    console.log(`Server is running at Port ${PORT}`);
})