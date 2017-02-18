var express = require('express');
var userController = require('../controllers/users');
var api = express.Router();

api.post('/signup', userController.saveUser)

module.exports = api;
