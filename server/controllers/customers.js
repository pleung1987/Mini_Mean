console.log('got inside server side controller customers.js');

var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');  //getting the collection in the model


module.exports = {
  index: function(req,res){
    //your code here
    Customer.find({},function(err,results){      // .find comes back in an array so thats why we can use a forloop to send as context
    // behind the hood of -> function find(object, callback){
    // inside the call back it uses the object to query the database which invoke the callback with erros and the resut of the database
        if(err){
            res.json({message: "Error happened", error: err});
                //in our client side, we can look at message and error to see what didn't work
        } else {
            res.json({message:"Success", result: results});
                //put the render index into call back so it can run without being an asychronous command
        }
    })
  },
  create: function(req,res){
      console.log(req.body);
      Customer.create(req.body,function(err, result){
          console.log("got to /create at Customers.js passing in -> ", req.body);
          var customer = new Customer(req.body);
          console.log("this is the Customer variable", customer);
          if(err){
              res.json({message: "Error happened", error: err});
          } else {
              // console.log(req.body)   //request body with everything in a object {name:x , type:x , color: x ...}
              console.log("successfully created customer:", result);
              //result stores into the database through variable result
              res.json({message:"Successfully created customer", result: result});
          }
      })
  },
  delete: function(req,res){
    //your code here
    Customer.remove({ _id: req.params.id }, function(err, result){
        if(err){
            res.json({message: "Error happened", error: err});
        }else{
            res.json({message:'Customer deleted', result: result});
        }
    })
  },
}
