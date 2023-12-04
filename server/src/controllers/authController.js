// src/controllers/authController.js
const passport = require('passport');


const googleAuthHandler = passport.authenticate('google', ["profile","email"]
);

const googleAuthCallback = passport.authenticate('google', {
  successRedirect: process.env.CLIENT_URL,
  failureRedirect: '/login',
});

const logout = (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL);
};

module.exports = {
  googleAuthHandler,
  googleAuthCallback,
  logout,
};
