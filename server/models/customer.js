console.log('inside customer.js models');
var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
 name: {type: String, required: true, minlength: 2}
}, {timestamps: true});

//setter-> sets the friend model
mongoose.model('Customer', CustomerSchema);
// We are setting this Schema in our Models as 'Friend'. Friend model in Mongoose looks for 'friends' in Mongo.
//FriendSchema is the DB you are putting your information in
