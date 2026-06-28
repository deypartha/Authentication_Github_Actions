import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import authRoute from "./routes/authRoutes.js"
import dotenv from "dotenv";
dotenv.config();
const port = 5000;
const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/auth", authRoute);
mongoose.connect(process.env.MONGO_URI).then(console.log("MongoDB Conected")).catch((err)=>{console.log(err)})

app.listen((req, res)=>{
    console.log(`Server is running on ${port}`)
})