var express = require('express');
var bodyParser = require('body-parser');
//require mongoose to pass data and store into mongoose
var mongoose = require('mongoose')
var path = require('path');
var app = express();
console.log("this is our app object:", app);

//Setting our Static Folder Directory -> tells us where to find our static files (html,css etc.)
//in this case it is in the ./client folder
app.use(express.static(path.join(__dirname, './client')));  //looks for something call index to serve
app.use(express.static(path.join(__dirname, './bower_components')));
app.use(bodyParser.json()); //pass it as json file from body parseer, have to put on top of the setter before hitting the route.
//thus, bodyParser won't work as the stack passes through the action when accessing to the route paths

// set an environment variable called APPROOT to keep track of the root folder of your app
process.env['APPROOT'] = __dirname;

//require mongoose configuration, use path.join to build the route
require(path.join(process.env['APPROOT'], 'server/config/mongoose.js'));
//require routes configuration, get a function from the module.exports, that gets invoked while passing it the app
require(path.join(process.env['APPROOT'], 'server/config/routes.js'))(app);
//routes.js exports a function with the app that we made


//start Server
app.listen(8000,function(){
    console.log('listening on port 8000');
})
