const jwt = require('jsonwebtoken');
const secretKey = "fghjfstdvsf";
 
  const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    //console.log("auth",token)
  
    if (!token) {
      return res.status(401).json({ message: 'Access token is missing' });
    }
  
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid or expired token' });
      }
      req.user = user;
      next();
    });
  };
  
 module.exports = authenticateToken;
 