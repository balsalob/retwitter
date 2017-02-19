var express = require('express');
var tweetController = require('../controllers/tweets');
var api = express.Router();

api.post('/sendtweet', tweetController.saveTweet);
api.get('/', tweetController.getTweets);
api.get('/tweet/:id', tweetController.getTweet);

module.exports = api;
