(function() {
    "use strict";

    angular
        .module("lacantina")
        .factory("cartService", cartService);


    var cartService = function($http, $rootScope) {

        var SetCart = function(product, quantity ) {

            if (isNaN(parseInt(quantity)) || quantity < 0) return;

            if ($rootScope.cartProducts[product.name]) {

                var cartproduct = $rootScope.cartProducts[product.name];


                cartproduct.quantity += quantity;
                cartproduct.total = quantity * cartproduct.product.price;
                $rootScope.totalsum += cartproduct.total;

            } else {

                var total = quantity * product.price;

                $rootScope.cartProducts[product.name] = {
                    product: product,
                    quantity: quantity,
                    total: total

                }
                $rootScope.totalsum += total;
            }

        }
        return {

            SetCart: SetCart
        }

    }


    angular
        .module("lacantina")
        .factory("cartService", cartService);



}());
