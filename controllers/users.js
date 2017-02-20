var mongoose = require('mongoose');
var User  = require('../models/user');
var Tweet  = require('../models/tweet');

function signUp(req,res) {

  var user = new User();
  var params = req.body;

  user.username = params.username;
  user.password = params.password;
  user.email = params.email;

  user.save(function (err, userStored) {
    if(err){
      res.status(500).send({message:'Error al guardar el usuario'});
    }else{
      res.status(200).send({user: userStored});
    }
  });
}

function signIn(req, res) {

  var params = req.body;
  var username = params.username;
  var password = params.password;

  User.findOne({username: username}, function(err, user) {
    if(err){
      res.status(500).send({message:'Error en el proceso de loguin'});
    }else{
      if(!user){
        res.status(404).send({message:'El usuario no está registrado'});
      }else{
        if(password == user.password){
          req.session.user_id = user._id;
          res.status(200).send({user: user});
        }else{
          res.status(500).send({message:'Contraseña incorrecta'});
        }
      }
    }
  });

}

function addFavorite(req, res) {
  var id = req.session.user_id;
  var tweetId = req.params.id;

  console.log(tweetId);

  Tweet.findById(tweetId, function(err, tweet) {
    if(err){
      res.status(500).send({message:'Error al recuperar el tweet'});
    }else{
          
       User.findById(tweet.user, function(err, user) {
         if(err){
          res.status(500).send({message:'Error al recuperar el tweet'});
        }else{
           var favorite = {$push: {favorites: [{text: tweet.text, Autor: user.username}]}};

            User.findOneAndUpdate({_id: id}, favorite, {new: true, upsert: true}, function(err, userUpdate) {

              if(err){
                res.status(500).send({message:'Error al guardar favorito'});
              }else{
                res.status(200).send({user: userUpdate});
              }

          });

        }
      });

      
    }
  });
    

}

function showFavorite(req, res) {
  var id = req.session.user_id;

  User.findById(id, function(err, tweets) {
    if(err){
      res.status(500).send({message:'Error al recuperar el tweet'});
    }else{

       res.status(200).send({tweet: tweets.favorites});

    }
  });
}

module.exports = {
  signUp,
  signIn,
  addFavorite,
  showFavorite
};
