require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set("strictQuery", true);
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/dbconfig');

app.options('/user/delete/:id', cors()) // it is necessary to active the delete request.
app.use((req,res,next)=>{
    //res.header('Access-Control-Allow-Origin','*');
    //res.header('Access-Control-Allow-Headers','*');
    res.header('Access-Control-Allow-Origin',"*")
    res.header('Access-Control-Allow-Headers','*');
    cors();
    next()
})

const PORT = process.env.PORT || 3500;
const connection = connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/food',require('./routes/foods'));
app.use('/',require('./routes/tables'));

mongoose.connection.once('open',()=>{
    console.log('connected to mongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

