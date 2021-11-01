const { verifyToken } = require('../utils/auth');

// Apply authorization
module.exports = (req, res, next) => {
  // Check if auth header exist
  const authHeader = req.header('Authorization');
  if (!authHeader) return res.status(401).send({ error: 'No authorization header' });

  // Check if auth header content valid
  const authHeaderContent = authHeader.split(' ');
  const isValid = authHeaderContent.length === 2 && authHeaderContent[0] === 'Bearer';
  if (!isValid) return res.status(401).send({ error: 'Authorization header invalid' });

  // Check if token can be decode correctly
  const decode = verifyToken(authHeaderContent[1]);
  if (!decode) return res.status(401).send({ error: 'Token verification failed' });

  // Decoded payload attached to request for further user role checking
  req.user = decode;
  next();
};
