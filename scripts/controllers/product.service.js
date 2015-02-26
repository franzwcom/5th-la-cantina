(function() {
    'use strict';

    var productsService = function($http) {

        var getProducts = function() {
            return $http.get("data/products.json")
                .then(function(response) {
                    return response.data;
                });
        }

        var getCategories = function() {
            return $http.get("data/categories.json")
                .then(function(response) {
                    return response.data;
                });
        }

        /*
        |--------------------------------------------------------------------------
        | get a single product
        |--------------------------------------------------------------------------
        */

        var getProduct = function(id){
            return $http.get("data/products.json")
                        .then(function(response){
                            return findProductInArray(response.data, id);
                        })
        }
        
        var findProductInArray = function(data, id){
            return data.filter(function(element){
                if(element.id === id){
                    return element;
                }
            });
        }



        return {
            getProducts: getProducts,
            getProduct: getProduct, // gets a single product
            getCategories: getCategories
        }
    }

    angular
        .module("lacantina")
        .factory("productsService", productsService);
}());
