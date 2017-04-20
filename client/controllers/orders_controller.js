
app.controller('ordersController', function($scope, storeFactory, $location) {
    console.log("got into the Orders Controller");
//retrieving product data
    var indexProduct = function() {
        storeFactory.indexProduct(function(data) {
            console.log("this is the ordersController data for products:",data);
            $scope.products = data;
        })
    }
    indexProduct();//immediately invoked after passing callback to grab all data from db
//retrieving customer data
    var indexCustomer = function() {
        storeFactory.indexCustomer(function(data) {
            console.log("this is the ordersController data for customers:",data);
            $scope.customers = data;
        })
    }
    indexCustomer();//immediately invoked after passing callback to grab all data from db
//retrieving Order Data
    var indexOrder = function() {
        storeFactory.indexOrder(function(data) {
            console.log("this is the ordersController data for orders:",data);
            $scope.orders = data.orders;
        })
    }
    indexOrder();//immediately invoked after passing callback to grab all data from db

    $scope.createOrder = function() {
    console.log("got into create in ordersController and passing these data to Factory:",$scope.newOrder );
    storeFactory.createOrder($scope.newOrder, function(data){
        console.log("this is the ordersController data returned:",data);
        $scope.message = data.message
      })
      indexOrder();
    }

    $scope.deleteOrder = function(order){
        console.log("got to the delete method at ordersController");
        console.log("this is the product object you are going to delete:", order );
        storeFactory.deleteOrder(order, function(data){
            console.log("this is the ordersController data:",data);
            $scope.message = data.message
        })
        indexOrder();
    }
});
