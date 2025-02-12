const mongoose = require('mongoose');

const userSchemea = mongoose.Schema({
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
    cart:{
        type:Array,
        default:[]
    },
    isAdsmin:Boolean,
    orders:{
        type:Array,
        default:[]
    },
    contact:Number,
    picture:String,
});

module.exports = mongoose.model("user", userSchemea);