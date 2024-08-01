const express=require('express')
const router=express.Router()
const accountController=require('../controllers/accountControllers')


router.post('/create-account',accountController.createUser)

//without google seller
router.post('/createSeller',accountController.createSeller)
router.post('/loginSeller',accountController.loginSeller)
//with google seller
router.post('/createSellervOauth',accountController.createSellervOauth)


router.post('/isPersonAvailable',accountController.isPersonAvailable)

module.exports=router