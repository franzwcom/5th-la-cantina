(function() {

'use strict';

  
    angular
        .module("lacantina", [
            "ngRoute",
            "lacantina.cart",
            "lacantina.product",
            "lacantina.prod",
            "lacantina.checkout"
        ])
        .config(function($routeProvider) {
            $routeProvider
                .when('/product/:id', {
                    templateUrl: './views/product.html',  
                    controller: 'prodController'
                })
                .when("/", {
                    templateUrl: './views/main.html',
                    controller: 'productController'
                })
                .when("/checkout", {
                    templateUrl: './views/checkoutcart.html',
                    controller: 'checkoutController'
                })
                .otherwise({
                    redirectTo: '/'
                });
        })
        .run(function($rootScope) {
            $rootScope.cartProducts = {};
            $rootScope.totalsum = 0;
        });




})();



// http://plnkr.co/edit/l6jX0lPjyBDIOZInRH82?p=preview


/*

'use strict';

angular
  .module('testyoangularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

*/

