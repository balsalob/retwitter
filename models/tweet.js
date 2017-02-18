var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tweetSchema = new Schema({
    text: String,
    user: { type: Schema.ObjectId, ref: "User" }
});

module.exports.Tweet = mongoose.model('Tweet', tweetSchema);
