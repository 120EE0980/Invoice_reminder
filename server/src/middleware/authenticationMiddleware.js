// src/middleware/authenticationMiddleware.js
const config = require('../config');

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

module.exports = {
  isAuthenticated,
};
