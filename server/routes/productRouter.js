const express=require('express')

const route=express.Router();
const productController=require('../controllers/productControllers')

route.post('/addProduct',productController.addNewProduct)

module.exports=route