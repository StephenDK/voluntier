// Require passport
const passport = require('passport');

// export route function
module.exports = (app) => {

// setup authentication route handler
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// Log user out
app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// This code sends the google profile user code to google
// and returns the profile information of the user.
app.get('/auth/google/callback', 
passport.authenticate('google'),
(req, res) => {
    res.redirect('/dashboard');
});
    
app.get('/api/current_user', (req, res) => {
    res.send(req.user);
})};