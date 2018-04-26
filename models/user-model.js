// // Dependencies
// const Sequelize = require('sequelize');
// // reference our db connection
// const sequelize = require('../config/connection');

// // create a new user model
// const User = sequelize.define("user", {
//     googleid: {
//         type: Sequelize.STRING
//     },
// }, {
//     timestamps: false
// });

// // sync to the database
// User.sync();

// // export model 
// module.exports = User;
// +++++++++++++++++++++++++++++++++++++++++++++

// Import mongoose modules
const mongoose = require('mongoose');

// mongoose schema object
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String
});

// Tell mongoose to create a new collection
mongoose.model('users', userSchema);