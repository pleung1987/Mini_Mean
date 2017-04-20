console.log("got into routes.js");
var mongoose = require('mongoose')
//getter -gets the model
var Customer = mongoose.model('Customer') // We are retrieving this Schema from our Models, named 'Friend'
var customers = require('./../controllers/customers.js')  //requiring the dictionary of customers.js
var Order = mongoose.model('Order')
var orders = require('./../controllers/orders.js')
var Product = mongoose.model('Product')
var products = require('./../controllers/products.js')

var path = require('path');


module.exports = function(app){
    //Customer routes
    app.get('/customers', function(req, res) {
      customers.index(req, res);
    });
    app.post('/customers', function(req, res) {
        console.log("got into the /customers route from route.js");
        console.log(req.body);      //turns into undefined when passed by http.post
      customers.create(req, res);
    });
    app.delete('/customers/:id', function(req, res) {
        console.log("this is the req.body at /customer in the server route delete:", req.body);
        customers.delete(req, res);
    });

//orders routes
    app.get('/orders', function(req, res) {
      orders.index(req, res);
    });
    app.post('/orders', function(req, res) {
        console.log("got into the /orders create route from route.js");
        console.log("passing through order.post @routes.js to create:",req.body);      //turns into undefined when passed by http.post
      orders.create(req, res);
    });
    app.delete('/orders/:id', function(req, res) {
        console.log("this is the req.body at the server route delete:", req.body);
      orders.delete(req, res);
    });

//products
    app.get('/products', function(req, res) {
      products.index(req, res);
    });

    app.post('/products', function(req, res) {
        console.log("got into the /products route from route.js");
        console.log(req.body);      //turns into undefined when passed by http.post
      products.create(req, res);
    });

    app.delete('/products/:id', function(req, res) {
        console.log("this is the req.body at the server route delete:", req.body);
      products.delete(req, res);
    });
};
