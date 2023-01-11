import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import morgan from 'morgan'
import usersRoute from './routes/usersRoute.js';

const app = express();

const PORT = 4000;

mongoose.set("strictQuery", false);

mongoose.connect(`${process.env.MONGO_URI}`, () => {
    console.log("connection established")
})

app.use(morgan("dev"));

app.use(express.json());

app.use("/users", usersRoute)

app.use((err, req, res, next)=> { 
    
    res.status(err.status || 500);
    res.json({success:false, message: err.message})

}) 

app.listen(PORT, ()=> console.log("server is running"));
