var express = require("express");
var app = express();
var bodyParser  = require("body-parser");
var mongoose = require('mongoose');
var userRoutes = require('./routes/user');
var tweetRoutes = require('./routes/tweet');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', userRoutes);
app.use('/', tweetRoutes);

mongoose.connect('mongodb://localhost/twitter', function(err, res) {
 if(err) {
   throw err;
 }else {
   console.log('Conectado a la base de datos');
   app.listen(3000, function() {
     console.log("Servidor corriendo en http://localhost:3000");
   });
 }
});
