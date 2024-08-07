// middleware/auth.js
const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.Authorization;
  console.log(req.headers)
  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.SECKERT_ACCESS_TOKEN, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401); // Unauthorized
  }
};

module.exports = authenticateJWT;
