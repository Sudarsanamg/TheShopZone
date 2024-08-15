const mongoose=require('mongoose');

const commentSchema =mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    sellername:{
        type:String,
        required:true
    },
    selleremail: { type: String, required: true },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    // category:{
    //     type:String,
    //     required:true
    // },
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
        default:0
    },
    comments:{
        type:[commentSchema],
        default:[]
       
    }
})

module.exports = mongoose.model('Product', ProductSchema);