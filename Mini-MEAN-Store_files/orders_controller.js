
app.controller('ordersController', function($scope, storeFactory, $location) {
    console.log("got into the Orders Controller");

  $scope.create = function() {
      console.log("got into create in new_controller");
    storeFactory.create($scope.newOrder, function(){

    })
    // If we needed to display an updated list of orders on this page, we would have to do this;
    console.log("these are the object passing into the factory:");    //after creating, invoke the index function to grab all data
  }


});
