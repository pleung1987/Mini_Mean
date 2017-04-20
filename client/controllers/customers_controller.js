
app.controller('customersController', function($scope, storeFactory, $routeParams, $location) {
    console.log("got into the customers Controller");

    var indexCustomer = function () {
        storeFactory.indexCustomer(function(data) {
            console.log("this is the customerController data:",data);
            $scope.customers = data;
        })
    }
    indexCustomer();//immediately invoked after passing callback to grab all data from db

    $scope.createCustomer = function() {
    console.log("got into create in customers_Controller and passing these data to Factory:",$scope.newCustomer );
    storeFactory.createCustomer($scope.newCustomer, function(data){
        console.log("this is the customerController data returned:",data);
        $scope.message = data.message
      })
      indexCustomer();
    }

    $scope.deleteCustomer = function(customer){
        console.log("got to the delete method at customers_controller");
        console.log("this is the customer object you are going to delete:", customer );
        storeFactory.deleteCustomer(customer, function(data){
            console.log("this is the customerController data:",data);
            $scope.message = data.message
        })
        indexCustomer();
    }

});
