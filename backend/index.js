import express from 'express';
import routes from './src/routes/index.js';
import mongoose from './db/index.js'
import cors from "cors";
// import SignUp from './path/to/SignUp'; // Adjust the path as needed


const app = express();

app.use(express.json());
app.use(cors());


mongoose.connection.on('error', (err)=>{
    console.log("Database error" , err)
 });
 
 mongoose.connection.on('open', ()=>{
    console.log("Database are connected")
 });

app.use("/api" , routes)


app.listen(5000,()=>{
    console.log("Server running for 5000")
})