var mongoose = require('mongoose');
var Tweet  = require('../models/tweet');

function saveTweet(req,res) {

  var tweet = new Tweet();
  var params = req.body;

  tweet.text = params.text;
  tweet.user = req.session.user_id;

  tweet.save(function (err, tweetStored) {
    if(err){
      res.status(500).send({message:'Error al guardar el tweet'});
    }else{
      res.status(200).send({tweet: tweetStored});
    }
  });
}

function getTweets(req,res) {
  Tweet.find(function(err, tweets) {
    if(err){
      res.status(500).send({message:'Error al recuperar los tweets'});
    }else{
      res.status(200).send({tweets});
    }
  });

}

function getTweet(req,res) {
  var tweetId = req.params.id;

  Tweet.findById(tweetId, function(err, tweet) {
    if(err){
      res.status(500).send({message:'Error al recuperar el tweet'});
    }else{
      res.status(200).send({tweet: tweet});
    }
  });
}

module.exports = {
  saveTweet,
  getTweets,
  getTweet
};
