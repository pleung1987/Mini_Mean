
app.controller('productsController', function($scope, storeFactory, $routeParams, $location) {
    console.log("got into the Products Controller");

    var indexProduct = function () {
        storeFactory.indexProduct(function(data) {
            console.log("this is the productsController data:",data);
            $scope.products = data;
        })
    }
    indexProduct();//immediately invoked after passing callback to grab all data from db

    $scope.createProduct = function() {
    console.log("got into create in productsController and passing these data to Factory:",$scope.newProduct );
    storeFactory.createProduct($scope.newProduct, function(data){
        console.log("this is the productsController data returned:",data);
        $scope.message = data.message
      })
      indexProduct();
    }

    $scope.deleteProduct = function(product){
        console.log("got to the delete method at productsController");
        console.log("this is the product object you are going to delete:", product );
        storeFactory.deleteProduct(product, function(data){
            console.log("this is the customerController data:",data);
            $scope.message = data.message
        })
        indexProduct();
    }
});
