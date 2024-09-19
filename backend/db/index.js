// import mongoose from "mongoose";
// // import ENV from "../src/constants/index.js";
// require('dotenv').config();
// const mongoose = require('mongoose');

// const url = "mongodb+srv://malihanaz:<password>@cluster0.jcmcwll.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// // Set strictQuery option explicitly
// mongoose.set('strictQuery', false); // or true, based on your preference

// // Your existing connection code
// mongoose.connect('your-mongodb-connection-string', { useNewUrlParser: true, useUnifiedTopology: true });


// const mongoURI = process.env.MONGODB_URI;

// mongoose.set('strictQuery', false); // or true
// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Database connected successfully'))
//   .catch(err => console.log('Database connection error:', err));


// export default mongoose;


import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
// require('dotenv').config();

const mongoURL = process.env.MONGO_URL

mongoose.set('strictQuery', true);
mongoose.connect(mongoURL);

export default mongoose;