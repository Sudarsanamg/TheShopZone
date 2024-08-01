const mongoose=require('mongoose');
const SellerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },  
    products:{
        type:Array,
        default:[]
    }
})

module.exports=mongoose.model('Seller',SellerSchema);