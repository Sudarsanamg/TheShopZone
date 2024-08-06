const express=require('express')

const route=express.Router();
const productController=require('../controllers/productControllers')
const authenticateJWT=require('../auth.js')



route.post('/addProduct',authenticateJWT,productController.addNewProduct)
route.delete('/deleteProduct',productController.deleteProduct)
route.put('/updateProduct',productController.editProduct)
route.post('/getProducts',productController.getProduct)

module.exports=route