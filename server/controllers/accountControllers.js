
const mongoose=require('mongoose');
const User = require('../models/User');
const jwt=require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const Seller = require('../models/Seller');

 

exports.createUser=async(req,res)=>{
    console.log('hitted server')
    const {name,email,password}=req.body.data;

    console.log(req.body)
    console.log(name)

    if(await User.findOne({email:email})){
        res.status(400).json({message:'Email id Already registered'});
    }
    else{

    const hashedPassword = await bcrypt.hash(password, 10);

    const data={
        name:name,
        email:email,
        password:hashedPassword,
    }

    const user=new User(data);
    try {
        await user.save();
        res.status(201).json({message:'Account created Successfully'})
    } catch (error) {
        res.status(400).json({message:'Something error occoured '})
    }
}
}

exports.loginUser =async(req,res)=>{


    const {email,password}=req.body;
    console.log(email)


    const user=await User.findOne({email:email})
    // console.log(user)
    // console.log(user.name)

    if(user){
        const hashedPassword=user.password;

        bcrypt.compare(password, hashedPassword, (err, isMatch) => {
            if (err) {
              res.status(400).json({message:'Something error occurred'})
            } else if (isMatch) {
              const token = jwt.sign({ id: user._id, username: user.name }, process.env.SECKERT_ACCESS_TOKEN, { expiresIn: '1h' });
              const refreshToken = jwt.sign({ id: user._id, username: user.name },process.env.REFRESH_ACCESS_TOKEN);
              // Proceed with login
              
              res.status(200).json({message:'Valid credentials',accessToken:token,refreshToken:refreshToken,user:user});
              
            } else {
              res.status(400).json({message:'Ivalid credentials'})
              // Deny access
            }
    })
    }
    else{
        res.status(400).json({message:'User doesnt exist'})
    }
}
exports.createUservOauth = async (req, res) => {
    let user = req.body.user;

    console.log('hitted the createuservOauth');


    try {
        user = new User(user);
        // console.log(seller)
        await user.save();
        // console.log(seller);

        const token = jwt.sign({ id: user._id, username: user.name }, process.env.SECKERT_ACCESS_TOKEN);
        const refreshToken = jwt.sign({ id: user._id, username: user.name }, process.env.REFRESH_ACCESS_TOKEN);
        res.status(200).json({ message: 'Valid credentials', accessToken: token, refreshToken: refreshToken, user: user });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
}

exports.loginUservOAuth=async(req,res)=>{
    console.log("hitted server");
    const {email}=req.body;
    let user=await User.findOne({email:email}).select('-password');
    
   
    if(user){
        // console.log(user);
        const token = jwt.sign({ id: user._id, username: user.name }, process.env.SECKERT_ACCESS_TOKEN, { expiresIn: '1h' });
        const refreshToken = jwt.sign({ id: user._id, username: user.name },process.env.REFRESH_ACCESS_TOKEN);
              // Proceed with login
        res.status(200).json({message:'Valid credentials',accessToken:token,refreshToken:refreshToken,user:user});
    }
    else{
        res.status(404).json({message:'Not found'})
    }
}







exports.createSeller=async(req,res)=>{
    console.log('hitted server')
    const {name,email,password,phone}=req.body.data;

    console.log(req.body)
    console.log(name)

    if(await User.findOne({email:email})){
        res.status(400).json({message:'Email id Already registered'});
    }
    else{

    const hashedPassword = await bcrypt.hash(password, 10);

    const data={
        name:name,
        email:email,
        password:hashedPassword,
    }

    const seller=new Seller(data);
    try {
        await seller.save();
        res.status(201).json({message:'Account created Successfully'})
    } catch (error) {
        res.status(400).json({message:'Something error occoured '})
    }
}
    

}

exports.createSellervOauth = async (req, res) => {
    let seller = req.body.seller;

    console.log('hitted the createSellervOauth');


    try {
        seller = new Seller(seller);
        console.log(seller)
        await seller.save();
        console.log(seller);

        const token = jwt.sign({ id: seller._id, username: seller.name }, process.env.SECKERT_ACCESS_TOKEN, { expiresIn: '1h' });
        const refreshToken = jwt.sign({ id: seller._id, username: seller.name }, process.env.REFRESH_ACCESS_TOKEN);
        res.status(200).json({ message: 'Valid credentials', accessToken: token, refreshToken: refreshToken, seller: seller });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
}


exports.loginSeller =async(req,res)=>{
    const {email,password}=req.body;
    console.log(email)


    const seller=await Seller.findOne({email:email})

    if(seller){
        const hashedPassword=seller.password;

        bcrypt.compare(password, hashedPassword, (err, isMatch) => {
            if (err) {
              res.status(400).json({message:'Something error occurred'})
            } else if (isMatch) {
              const token = jwt.sign({ id: seller._id, username: seller.name }, process.env.SECKERT_ACCESS_TOKEN, { expiresIn: '1h' });
              const refreshToken = jwt.sign({ id: seller._id, username: seller.name },process.env.REFRESH_ACCESS_TOKEN);
              // Proceed with login
              res.status(200).json({message:'Valid credentials',accessToken:token,refreshToken:refreshToken,seller:seller});
              
            } else {
              res.status(400).json({message:'Ivalid credentials'})
              // Deny access
            }
    })
    }
    else{
        res.status(400).json({message:'User doesnt exist'})
    }

}


exports.loginSellervOAuth=async(req,res)=>{
    // console.log('hitted server')
    const {email}=req.body;
    const seller=await Seller.findOne({email:email})
    if(seller){
        const token = jwt.sign({ id: seller._id, username: seller.name }, process.env.SECKERT_ACCESS_TOKEN, { expiresIn: '1h' });
        const refreshToken = jwt.sign({ id: seller._id, username: seller.name },process.env.REFRESH_ACCESS_TOKEN);
              // Proceed with login
        res.status(200).json({message:'Valid credentials',accessToken:token,refreshToken:refreshToken,seller:seller});
    }
    else{
        res.status(404).json({message:'Not found'})
    }

}





//here person is seller 
exports.isPersonAvailable=async(req,res)=>{
    const email=req.body.email;
    if(await Seller.findOne({email:email})){
        res.send(true)
    }
    else{
        res.send(false)
    }
    
    
    
}

exports.isUserAvailable=async(req,res)=>{
    const email=req.body.email;
    if(await User.findOne({email:email})){
        res.send(true)
    }
    else{
        res.send(false)
    }
    
    
    
}