// src/services/authService.js
const passport = require('passport');
const { Strategy: GoogleStrategy } = require('passport-google-oauth20');


passport.use(new GoogleStrategy(
    {
       clientID:process.env.CLIENT_ID,
       clientSecret:process.env.CLIENT_SECRET,
       callbackURL:"/auth/google/callback",
       scope:["profile","email"],
    }
    , (accessToken, refreshToken, profile, done) => {
           callback(null,profile);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null,user);
});
