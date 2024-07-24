const { raw } = require('@prisma/client/runtime/library');
const mongoose=require('mongoose');
const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    sellername:{
        type:String,
        required:true
    },
    selleremail:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    comments:{
        type:Array,
        default:[]
    }
})

module.exports = mongoose.model('Product', ProductSchema);