// This is a config file that connects to MongoDB and loads all of our models for us.
// require mongoose
var mongoose = require('mongoose');
// require file-system
var fs = require('fs');
// connect to the database
mongoose.connect('mongodb://localhost/black_belt_second');

// specify the path to all of the models
var models_path = __dirname + '/../models'

fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') > 0) {
    require(models_path + '/' + file);
  }
})