const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tableSchma = new Schema({

    number:{
        type:Number,
        required:true
    },
    people_number:{
        type:Number,
        required:true,
        default:0
    },
    key:{
        type:String,
        required:true
    },
    orders:{
        type:Array,
        required:true,
        default:[]
    }

})

module.exports = mongoose.model('table',tableSchma);