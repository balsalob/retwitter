var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    favorites: [{text: String, Autor: String}]
});

module.exports = mongoose.model('User', userSchema);
