var mongoose = require('mongoose');
var User  = require('../models/user');

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
          res.status(200).send({user: user});
        }else{
          res.status(500).send({message:'Contraseña incorrecta'});
        }
      }
    }
  });

}

function addFavorite(req, res) {
  var userId = req.params.id;
  var update = reg.body;

  User.findByIdAndUpdate(userId, update, function (err, userUpdated) {
    if(err){
      res.status(500).send({message:'Error al actualizar el usuario'});
    }else{
      res.status(200).send({user: userUpdated});
    }
  });
}

function showFavorite(req, res) {

}

module.exports = {
  signUp,
  signIn,
  addFavorite,
  showFavorite
};
