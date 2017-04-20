console.log('inside order.js models');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var ObjectId = Schema.ObjectId;

var OrderSchema = new mongoose.Schema({
 _customer: {type: Schema.Types.ObjectId, required: true, ref: 'Customer'}, // the type of object id
 _product: {type: Schema.Types.ObjectId, required: true, ref: 'Product'},
 quantity:{type: Number, required: true},
}, {timestamps: true});

//setter-> sets the rename model
mongoose.model('Order', OrderSchema);
// We are setting this Schema in our Models as 'rename'. rename model in Mongoose looks for 'renames' in Mongo.
//renameSchema is the DB you are putting your information in
