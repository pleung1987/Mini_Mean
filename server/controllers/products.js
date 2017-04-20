console.log('got inside server side controller products.js');

var mongoose = require('mongoose');
var Product = mongoose.model('Product');  //getting the collection in the model

module.exports = {
  index: function(req,res){
    //your code here
    Product.find({},function(err,results){      // .find comes back in an array so thats why we can use a forloop to send as context
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
      Product.create(req.body,function(err, result){
          console.log("got to /create at Products.js passing in -> ", req.body);
          var product = new Product(req.body);
          console.log("this is the Product variable", product);
          if(err){
              res.json({message: "Error happened", error: err});
          } else {
              // console.log(req.body)   //request body with everything in a object {name:x , type:x , color: x ...}
              console.log("successfully created product:", result);
              //result stores into the database through variable result
              res.json({message:"successfully created product", result: result});
          }
      })
  },
  update: function(req,res){
      console.log("got into the product update @ server-side products.js");
    Product.findOne({ _id:req.params.id}, function(err, product){   //product is the body that we need to edit
        console.log("this is the body that is updated:", req.body);
        if(err){
            console.log("there is an error updating our product:", err);
        } else {
            product.first_name = req.body.first_name;        //product is the function callback that we are changing
            product.last_name = req.body.last_name;
            product.birthday = req.body.birthday;
            product.save(function(err, updatedproduct){
                if(err){
                    res.json({message: "Error happened", error: err});
                }else{
                    res.json({message:"Success", updatedproduct: updatedproduct})
                    }
                })
            }
        })
},
  delete: function(req,res){
    //your code here
    Product.remove({ _id: req.params.id }, function(err){
        if(err){
            res.json({message: "Error happened", error: err});
        }else{
            res.json({message:'Product deleted'});
        }
    })
  },
  show: function(req,res){
    //your code here
    Product.findOne({ _id: req.params.id }, function(err, result){   //params are the body in the url, body is the objects.name etc.
// .findOne comes back as object directly and not an array
        if(err){
            res.json({message: "Error happened", error: err});
        } else {
            console.log("********************************");
            console.log("This is the result showing One object:", result);
            console.log("********************************");
            res.json({message:"Success", result: result});  //need to ask why response passes back an array with the particular _id product.
        }
    });
  }
}
