console.log('got into Friends Factory');

app.factory('storeFactory', function($http) {
  var factory = {};

//Serving Customers Controller
  factory.indexCustomer = function(callback) {
      //call this method if you want to update or set the customers variable
      $http.get('/customers').then(function(returned_data){
        console.log("these are the returned datas:",returned_data.data.result);
        callback(returned_data.data.result);
      });
  }
  factory.createCustomer = function(newCustomer, callback) {
      $http.post('/customers', newCustomer).then(function(returned_data){
        console.log("the object passed at the factory:", newCustomer);    //newfriend logs as the object passed in by controller from $scope.newFriend
        console.log("these are the returned data:",returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
  }
  factory.deleteCustomer = function(customerToDelete, callback) {
    console.log("this is the friend to delete at the Factory:", customerToDelete);
    $http.delete('/customers/'+ customerToDelete._id, customerToDelete).then(function(returned_data){
        console.log("this is the returned data from the factory:",returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
    })
  }
  //Serving Product Controller
  factory.indexProduct = function(callback) {
      //call this method if you want to update or set the customers variable
      $http.get('/products').then(function(returned_data){
        console.log("these are the returned datas:",returned_data.data.result);
        callback(returned_data.data.result);
      });
  }
  factory.createProduct = function(newProduct, callback) {
      $http.post('/products', newProduct).then(function(returned_data){
        console.log("the object passed at the factory:", newProduct);    //newfriend logs as the object passed in by controller from $scope.newFriend
        console.log("these are the returned data:",returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
  }
  factory.deleteProduct = function(productToDelete, callback) {
    console.log("this is the product to delete at the Factory:", productToDelete);
    $http.delete('/products/'+ productToDelete._id, productToDelete).then(function(returned_data){
        console.log("this is the returned data from the factory:",returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
    })
  }

  //Serving Orders Controller
  factory.indexOrder = function(callback) {
      //call this method if you want to update or set the customers variable
      $http.get('/orders').then(function(returned_data){
        console.log("these are the returned datas at IndexOrder:",returned_data.data);
        callback(returned_data.data);
      });
  }
  factory.createOrder = function(newOrder, callback) {
      $http.post('/orders', newOrder).then(function(returned_data){
        console.log("the object passed at the factory:", newOrder);    //newfriend logs as the object passed in by controller from $scope.newFriend
        console.log("these are the returned data at the factory:",returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
  }
  factory.deleteOrder = function(orderToDelete, callback) {
    console.log("this is the product to delete at the Factory:", orderToDelete);
    $http.delete('/orders/'+ orderToDelete._id, orderToDelete).then(function(returned_data){
        console.log("this is the returned data from the factory:",returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
    })
  }
  return factory;
});
