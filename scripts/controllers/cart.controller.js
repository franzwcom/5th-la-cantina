(function() {
    "use strict";

    angular
        .module("lacantina.cart", [])
        .controller("cartController", cartController);

    function cartController($scope, $rootScope) {

        $scope.deleteCartProduct = function(product) {
            var cartproduct = $rootScope.cartProducts[product.product.name];
            var productamount = cartproduct.product.price * cartproduct.quantity;
            $rootScope.totalsum -= productamount;
            delete $rootScope.cartProducts[product.product.name];





        }

    }


})();
