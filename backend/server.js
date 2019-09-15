const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
 
const excercises = require('./routes/excercises');
const users = require('./routes/users');


dotenv.config()

const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex : true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("mongo is connected")
})

app.use(cors());
app.use(express.json())
app.use('/excercises',excercises)
app.use('/users',users)

app.listen(port, ()=>{
    console.log('server is running')
})