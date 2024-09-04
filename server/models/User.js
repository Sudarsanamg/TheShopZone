const mongoose = require('mongoose');

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    orders:{
        type:Array,
        default:[]
    },
    cart:{
        type:Array,
        default:[]
    },
    
    
})
module.exports = mongoose.model('User', UserSchema);