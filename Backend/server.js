import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import foodRouter from "./Routes/foodRoute.js";

//app config 

const app =express();
const port = 4000;

//middleware 
app.use(express.json());
app.use(cors()); 


//db_connection
connectDB();


//api ednpoint 
app.use("/api/food",foodRouter)



app.get("/",(req,res)=>{
    res.send("hii")
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`); 
}) 


//mongodb+srv://fahadmoidheen_db_user:karthika123@cluster0.emvhdju.mongodb.net/?appName=Cluster0

//mongodb+srv://fahadmoidheen_db_user:karthika123@cluster0.emvhdju.mongodb.net/?