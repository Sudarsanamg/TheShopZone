const product=require('../models/Product')
const mongoose=require('mongoose')
const { BlobServiceClient } = require('@azure/storage-blob');
const fs = require('fs');
const path = require('path');
const Seller = require('../models/Seller');


exports.addNewProduct=async(req,res)=>{
    console.log('hitted the server of add new product')
    const data=req.body;
    console.log(data);
    const accessToken=data.accessToken;

    const user=req.user;

    // console.log(user);

    






    let prod=new product(data.product);
    await Seller.findByIdAndUpdate(user.id,{ $push: { products: prod } }, )

    

    try {
        await prod.save();
        res.status(200).json('Product added successfully')
        
    } catch (error) {
        console.log(error)
    }
}

exports.editProduct=async(req,res)=>{
    const id=req.body.id;
    console.log(id)
    const data=req.body.data;
    console.log(data)
    try {
        await product.findByIdAndDelete(id);
        const prod=new product(data)
        await prod.save()
        res.status(200).json({message:'Product updated successfully'})

    } catch (error) {
        console.log(error)
    }
}

exports.deleteProduct=async(req,res)=>{
    const id=req.body.id;
    try {
        await product.findByIdAndDelete(id);
        res.status(200).json({message:"Successfully deleted"})
    } catch (error) {
        console.log(error)
    }
}

exports.getProduct=async(req,res)=>{
   const email=req.body.email;
   if(email){
    await Seller.findOne({email:email}).then((d)=>{const products=d.products;
         res.status(200).json({products:products})}).catch((error)=>console.log(error))
   }
   else{
    res.status(404).json({message:'Something is wrong'})
   }
}
