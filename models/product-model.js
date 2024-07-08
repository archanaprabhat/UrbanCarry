const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/scatch")

const productSchemea = mongoose.Schema({
    image:{
        type:String,
       },
    name:{
        type:String,
        required:true,
        unique:true
    },
    price: Number,
    discount:{
        type:Number,
        default:0
    },
    bgcolor:String,
    panelcolor:String,
    textcolor:String,
});

module.exports = mongoose.model("user", productSchemea);