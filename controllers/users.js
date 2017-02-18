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
  signUp
  addFavorite
  showFavorite
};
