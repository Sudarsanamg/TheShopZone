
const mongoose=require('mongoose');
const User = require('../models/user');


exports.createUser=async(req,res)=>{
    const data=req.body;
    const email=data.email;
    if(User.findOne({email:email})){
        res.status(400).json({
            error:"User is already exists"
        })
    }
    
    try {
        let newUser=new User(data)


        newUser=await newUser.save();


        res.status(200).json('user Created successfully')
    } catch (error) {
        console.log(error)
    }
}