console.log('got inside server side controller orders.js');

var mongoose = require('mongoose');
var Order = mongoose.model('Order');  //getting the collection in the model
var Product = mongoose.model('Product');    // gets the collection in the model Product
var Customer = mongoose.model('Customer');

module.exports = {
  index: function(req,res){
    //your code here
    Order.find({})      // find all the Orders in the Schema
        //populate and execute in order to see inside the attribute of object if it is an association
    .populate('_customer _product')
    .exec(function(err, orders){
        if(err){
            res.json({message: "Error happened", error: err});
                //in our client side, we can look at message and error to see what didn't work
        } else {
            res.json({message:"Success retrieving all data", orders: orders});
                //put the render index into call back so it can run without being an asychronous command
        }
    })
  },
  create: function(req,res){
      //look into the specific product id first to see if quanity is enough before creating order...
      Product.findOne({ _id:req.body._product._id}, function(err, product){   //product is the body that we need to edit
          console.log("this is the product id to be updated:", req.body._product._id);
          console.log("this will be the body to updated:", req.body);
          if(err || req.body.quantity>product.quantity){
                res.json({message: "Error happened during product quantity, Try Changing to another quanity", error: err});
            }else{
            Order.create(req.body,function(err, result){
                console.log("got to /create at Orders.js passing in -> ", req.body);
                if(err){
                    res.json({message: "Error happened for creation", error: err});
                } else {
                // var order = new Order(req.body);
                // console.log("this is the new Order stored in Schema:", order);
                product.quantity -= req.body.quantity;        //product is the function callback that we are changing
                console.log("Check if product quantity has been deducted to:", product.quantity );
                product.save(function(err){
                    if(err){
                        res.json({message: "Error happened", error: err});
                    }else{
                        res.json({message:"Successfully Created Order", result: result});
                        }
                })
            }
        })
        console.log("successfully created order:", product);
        //result stores into the database through variable result
    }
  })
},
  delete: function(req,res){
    //your code here
    Order.remove({ _id: req.params.id }, function(err){
        if(err){
            res.json({message: "Error happened", error: err});
        }else{
            res.json({message:'Order deleted'});
        }
    })
  }
}
