// middleware/auth.js
const jwt = require('jsonwebtoken');
const express = require('express')
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
const app = express()
const port = 3004
const cors=require('cors');
const Seller = require('./models/Seller');
const connectDB=require('./connectDB')
app.use(cors())
app.use(express.json())
require('dotenv').config()


connectDB();


app.get('/', (req, res) => res.send('Hello World!'))



app.post('/authenticateJWT', async(req, res) => {
 
  const authHeader = req.body.headers.Authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    // console.log(token)

    jwt.verify(token, process.env.SECKERT_ACCESS_TOKEN, async(err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }
      // console.log(user.id);
      const seller=await Seller.findOne({_id: new ObjectId(user.id)})
      // console.log(seller)
      return res.status(200).json({user:seller});
    });
  } else {
    res.sendStatus(401); // Unauthorized
  }
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

