// require passport
const passport = require('passport');
// require Google passport strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const mongoose = require('mongoose');

// require api keys
const keys = require('../config/keys');

// user model
// const User = require('../models/user-model');
const User = mongoose.model('users');

// serializeUser
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// deserializeUser
passport.deserializeUser((id, done) => {
    User.findById(id)
    .then(user => {
        done(null, user);
    });
});


passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    // Callback URL
    callbackURL: '/auth/google/callback',
    proxy: true
}, 
async (accessToken, refreshToken, profile, done) => {
    // Query datbase to find if user exists
    const existingUser = await User.findOne({ googleId: profile.id })
        
    if (existingUser) {
            // We already have a record with the user id.
            // Tell passport we are done().
                return done(null, existingUser);
        }
            // We dont have a record with this id, create new user
            const user = await new User({ googleId: profile.id }).save()
            done(null, user);
})
);