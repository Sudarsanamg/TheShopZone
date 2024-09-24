const express=require('express')
const router=express.Router()
const accountController=require('../controllers/accountControllers')


router.post('/create-account',accountController.createUser)

//user
router.post('/isUserAvailable',accountController.isUserAvailable)


//with google User

router.post('/createUservOauth',accountController.createUservOauth)
router.post('/loginUservOAuth',accountController.loginUservOAuth)
// router.post('/loginUservOAuth',accountController.loginUservOAuth)




//without google user


//seller
//without google seller
router.post('/createSeller',accountController.createSeller)
router.post('/createUser',accountController.createUser)
router.post('/loginSeller',accountController.loginSeller)
router.post('/loginUser',accountController.loginUser)



//with google seller
router.post('/createSellervOauth',accountController.createSellervOauth)
router.post('/loginSellervOAuth',accountController.loginSellervOAuth)

router.post('/isPersonAvailable',accountController.isPersonAvailable)






module.exports=router