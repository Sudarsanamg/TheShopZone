const express=require('express')

const route=express.Router();
const productController=require('../controllers/productControllers')

route.post('/addProduct',productController.addNewProduct)
route.delete('/deleteProduct',productController.deleteProduct)
route.put('/updateProduct',productController.editProduct)

module.exports=route