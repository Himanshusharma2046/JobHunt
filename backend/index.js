import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";



const app=express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions={
    origin:'http//localhost:5173',
    credentials:true
}

const PORT=3000;

app.listen(PORT ,()=>{
    console.log(`Server is running at Port ${PORT}`);
})