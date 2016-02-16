angular.module('ionicApp')
    .service('ProductService', ['$http', function($http) {
        var obj = {};

        obj.getProducts = function() {
            return $http.get('products.json')
        };

        return obj;
    }]);
