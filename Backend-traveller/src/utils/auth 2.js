const jwt = require('jsonwebtoken');

// Sign token for user login
function generateToken(userId) {
  return jwt.sign({userId}, process.env.JWT_KEY, { expiresIn: '1d' });
}

// Verify token to check if current user is valid
function verifyToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_KEY);
  } catch (error) {
    return null;
  }
}
module.exports = { generateToken, verifyToken };
