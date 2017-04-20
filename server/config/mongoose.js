console.log("mongo connection, mongoose setup");
// require mongoose
var mongoose = require('mongoose');
// require the fs module for loading model files
var fs = require('fs');
// require path for getting the models path
var path = require('path');

console.log("future mongoose connection and model loading");
mongoose.connect('mongodb://localhost/MEAN_store');
// create a variable that points to the path where all of the models live

var models_path = path.join(__dirname, './../models');
// read all of the files in the models_path and require (run) each of the javascript files

//function for fetching all the JS file on models that will be created
fs.readdirSync(models_path).forEach(function(file) {
if(file.indexOf('.js') >= 0) {
  // require the file (this runs the model file which registers the schema)
  require(models_path + '/' + file);
  // require that file if it is a JS
    }
});
