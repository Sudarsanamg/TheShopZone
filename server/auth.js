// middleware/auth.js
const jwt = require('jsonwebtoken');
require('dotenv').config()

// 

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // console.log(req.headers)
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    // console.log("token "+token)

    jwt.verify(token, process.env.SECKERT_ACCESS_TOKEN, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }
      req.user = user;
      console.log("user id"+user)
      next();
    });
  } else {
    res.sendStatus(401); // Unauthorized
  }
};

module.exports = authenticateJWT;
