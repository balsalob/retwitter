var express = require('express');
var userController = require('../controllers/users');
var api = express.Router();

api.post('/signup', userController.signUp)
api.post('/signin', userController.signIn)

module.exports = api;
