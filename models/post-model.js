// Dependencies
// const Sequelize = require('sequelize');
// // reference our db connection
// const sequelize = require('../config/connection');

// // create a new user model
// const Post = sequelize.define("post", {
//     name: {
//         type: Sequelize.STRING
//     },
//     email: {
//         type: Sequelize.STRING
//     },
//     title: {
//         type: Sequelize.STRING
//     },
//     description: {
//         type: Sequelize.STRING
//     }
// }, {
//     timestamps: false
// });

// // sync to the database
// Post.sync();

// // export model 
// module.exports = Post;

const mongoose = require('mongoose');

// mongoose schema object
const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: String,
    email: String,
    title: String,
    description: String
});

// Tell mongoose to create a new collection
var Post = mongoose.model('posts', postSchema);

module.exports = Post;