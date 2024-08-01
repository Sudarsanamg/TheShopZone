const product=require('../models/Product')
const mongoose=require('mongoose')
const { BlobServiceClient } = require('@azure/storage-blob');
const fs = require('fs');
const path = require('path');



exports.addNewProduct=async(req,res)=>{
    const data=req.body;

    let prod=new product(data);

    try {
        prod= await prod.save();
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