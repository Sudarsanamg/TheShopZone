const product=require('../models/Product')
const mongoose=require('mongoose')
const { BlobServiceClient } = require('@azure/storage-blob');
const fs = require('fs');
const path = require('path');
const Seller = require('../models/Seller');


exports.searchProductAll=async(req,res)=>{
    const {search}=req.query;
    // console.log(search);
    // const searchTerm = 'some value';
    const regex = new RegExp(search, 'i');
    try {
    
        await product.find({name:regex}).then((resp)=>  res.send(resp));

        // console.log(products);


    } catch (error) {
        console.log(error)
    }

}


exports.searchProduct =async(req,res)=>{
    const {search}=req.query;
    // console.log(search);
    // const searchTerm = 'some value';
    const regex = new RegExp(search, 'i');
    try {
    
        await product.find({name:regex}).limit(4).then((resp)=>  res.send(resp));
        // console.log(products);


    } catch (error) {
        console.log(error)
    }

   
}


exports.addNewProduct=async(req,res)=>{
    console.log('hitted the server of add new product')
    const data=req.body;
    // console.log(data);
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
    console.log('hitted edit function')
    const id=req.body.id;
    // console.log(id)
    const data=req.body.data;
    console.log(data)
    const seller =req.user;
    // console.log(user);
    try {
        await product.findByIdAndDelete(id);
        const prod=new product(data)
        await prod.save()
        //update in seller
        // const sel=await Seller.findById(seller._id)
        console.log(seller)
        
       
        await Seller.updateOne(
            { _id:seller.id },
            { $pull: { products: { _id:new mongoose.Types.ObjectId(id) } } }
        ).then(result => {
            console.log("Product removed successfully:", result);
          })
          .catch(error => {
            console.error("Error removing product:", error);
          });
        // let newProd=new product(data);
        await Seller.findByIdAndUpdate(seller.id,{ $push: { products: prod } }, )
      
        res.status(200).json({message:'Product updated successfully'})
        
    } catch (error) {
        console.log(error)
        res.status(404).json({error:error})
    }
}

exports.deleteProduct=async(req,res)=>{
    // consoloe.log('Hitted delete server')
    const id=req.body.id;
    const seller =req.user;

    try {
        await product.findByIdAndDelete(id);
        await Seller.updateOne(
            { _id:seller.id },
            { $pull: { products: { _id:new mongoose.Types.ObjectId(id) } } }
        ).then(result => {
            console.log("Product removed successfully:", result);
          })
          .catch(error => {
            console.error("Error removing product:", error);
          });
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
