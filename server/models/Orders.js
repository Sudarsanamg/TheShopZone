const mongoose =require('mongoose')

const Orders =new mongoose.Schema({
    user:{
        type:String
    },
    product:{
       type:String,
       required:true
    },
    Address:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }

})

module.exports=mongoose.model('Orders',Orders)
