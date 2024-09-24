const express=require('express')
const router=express.Router()
const Orders=require('../models/Orders')


router.post('/create-order',async(req,res)=>{
    console.log('hitted server')
    const {user,product,Address,quantity}=req.body;

    console.log(req.body)
    console.log(product)

    const data={
        user:user,
        quantity:quantity,
        product:product,
        Address:Address,
    }

    const order=new Orders(data);
    try {
        await order.save();
        res.status(201).json({message:'Order created Successfully'})
    } catch (error) {
        res.status(400).json({message:'Something error occoured '})
    }
})



module.exports=router;