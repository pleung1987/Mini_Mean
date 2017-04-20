
app.controller('dashboardController', function($scope, storeFactory, $routeParams, $location) {
console.log("got into the Dashboard Controller");
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

});
