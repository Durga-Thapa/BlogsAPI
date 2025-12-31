import mongoose from "mongoose";
import express from "express"
import dotenv from 'dotenv'
import connectDB from "./Config/connect.js";

dotenv.config()
const app=express()
const port=process.env.PORT ? Number(process.env.PORT) : 8000
connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`)
})