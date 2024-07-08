const mongoose = require('mongoose');


const ownerSchemea = mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password: String,
    products:{
        type:Array,
        default:[]
    },
    picture:String,
    gstin:String,
});

module.exports = mongoose.model("owner", ownerSchemea);