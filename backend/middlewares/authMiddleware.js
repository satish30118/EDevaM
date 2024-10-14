// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

// Middleware function to protect admin routes
const adminAuth = (req, res, next) => {
  try {
    // Get token from headers
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the user is an admin (You can add your own condition)
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Access forbidden. Admins only.' });
    }

    // Attach the user info to the request object for further use
    req.user = decoded;

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

module.exports = adminAuth;
