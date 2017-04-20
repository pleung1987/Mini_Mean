console.log('inside product.js models');
var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
 name: {type: String, required: true, minlength: 2},
 img: {type: String},
 description: {type: String, required: true, minlength: 2},
 quantity: {type: Number, required: true}
}, {timestamps: true});

//setter-> sets the friend model
mongoose.model('Product', ProductSchema);
// We are setting this Schema in our Models as 'Friend'. Friend model in Mongoose looks for 'friends' in Mongo.
//FriendSchema is the DB you are putting your information in
