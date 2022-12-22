const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }

})

module.exports = mongoose.model('food',foodSchema)