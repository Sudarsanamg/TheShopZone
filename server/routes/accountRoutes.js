const express=require('express')
const router=express.Router()
const accountController=require('../controllers/accountControllers')


router.post('/create-account',accountController.createUser)
//without google 
router.post('/createSeller',accountController.createSeller)
router.post('/loginSeller',accountController.loginSeller)


router.post('/isPersonAvailable',accountController.isPersonAvailable)

module.exports=router