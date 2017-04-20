// angular routes is injected into your app as the
// SECOND parameter to angular.module() function
// any additional libraries, such as angular cookies, are injected
// in the same way but separated by commas ['ngRoute', 'ngCookies']
var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/',{
        templateUrl: '../partials/dashboard.html',
        controller: 'dashboardController',
    })
     // when someone enters a url 'localhost:8000/#!/new', load the following partial
    .when('/products',{
        templateUrl: '../partials/products.html',
        controller: 'productsController',
    })
    // when someone enters a url 'localhost:8000/#!/edit', load the following partial
    // the _id property will be passed into the $routeParams object as long as it's
    // $routeParams is injected
    .when('/orders',{
        templateUrl: '../partials/orders.html',
        controller: 'ordersController',
    })
    .when('/customers',{
        templateUrl: '../partials/customers.html',
        controller: 'customersController',
    })
    // when someone uses any other route than above, load the following partial
    .otherwise({
        redirectTo: '/'
    });
// Routes to load your new and edit pages with new and edit controllers attached to them!
});
