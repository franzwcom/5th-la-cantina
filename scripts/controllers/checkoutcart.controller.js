/*
|-----------------------------------------------------------
| checkout cart
|-----------------------------------------------------------
*/

(function(){

	angular
		.module("lacantina.checkout", [])
		.controller("checkoutController", checkoutController);

	function checkoutController($scope, productsService, $routeParams, cartService){


	/*

		var modelProduct = function(productArray){
			$scope.product = productArray[0];
			
		}

		productsService.getProduct($routeParams.id)
			.then(modelProduct);
			console.log($routeParams.id);
    */
		/*
		|-----------------------------------------------------------
		| send a product 
		|-----------------------------------------------------------
		

		$scope.sendtoChart = function(product) {
            var quantity = this.quantity;
            // var total = this.quantity * product.price;
            // $rootScope.totalsum += total;
            // console.log($rootScope.totalsum);

            cartService.SetCart(product, quantity);


        }

*/










	}   



}());