var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    login: String,
    password: String,
    email: String,
    favoritos: { type: Schema.ObjectId, ref: "Tweet" }
});

module.exports = mongoose.model('User', userSchema);
