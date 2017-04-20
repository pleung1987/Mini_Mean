console.log('got into Friends Factory');

app.factory('storeFactory', function($http) {
  var factory = {};


  factory.index = function(callback) {
      //call this method if you want to update or set the friends variable
      $http.get('/friends').then(function(returned_data){
        console.log("these are the returned datas:",returned_data.data.result);
        callback(returned_data.data.result);
      });
  }
  factory.show = function(id, callback) {
      console.log("this is the id passed in:", id);
      $http.get('/friends/'+id).then(function(returned_data){
          console.log("this is the returned data from show @ friends Factory:", returned_data);
          callback(returned_data.data)
      })
      // Your code here
  }
  factory.create = function(newfriend, callback) {
      $http.post('/friends', newfriend).then(function(returned_data){
        console.log("the object passed at the factory:", newfriend);    //newfriend logs as the object passed in by controller from $scope.newFriend
        console.log("these are the returned data:",returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
  }
  factory.update = function(friendToUpdate, callback) {
      console.log("the friend id in the factory:", friendToUpdate._id);
      console.log("the friend to edit in the factory:", friendToUpdate);
    $http.put('/friends/'+ friendToUpdate._id, friendToUpdate).then(function(returned_data) {

        console.log("this is the returned data from the factory:",returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
    })
  }
  factory.delete = function(friendToDelete, callback) {
    console.log("this is the friend to delete at the Factory:", friendToDelete);
    $http.delete('/friends/'+ friendToDelete._id, friendToDelete).then(function(returned_data){
        console.log("this is the returned data from the factory:",returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
    })
  }
  return factory;
});
