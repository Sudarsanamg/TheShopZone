const express=require('express')
const router=express.Router()
const accountController=require('../controllers/accountControllers')


router.post('/create-account',accountController.createUser)

module.exports=router