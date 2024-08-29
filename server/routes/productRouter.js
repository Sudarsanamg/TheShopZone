const express=require('express')

const route=express.Router();
const productController=require('../controllers/productControllers')
const authenticateJWT=require('../auth.js')


route.get('/searchProduct',productController.searchProduct)
route.get('/searchProductAll',productController.searchProductAll)

route.post('/addProduct',authenticateJWT,productController.addNewProduct)
route.post('/deleteProduct',authenticateJWT,productController.deleteProduct)
route.post('/updateProduct',authenticateJWT,productController.editProduct)
route.post('/getProducts',productController.getProduct)


module.exports=route