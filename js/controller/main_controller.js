ionicApp.controller('MainCtrl', ['$scope', '$http', 'ProductService',
    function($scope, $http, ProductService) {
        console.log('MainCtrl');

        $scope.items = [];
        $scope.mylist = [];

        ProductService.getProducts()
            .then(function(data) {
                console.log(data);
                $scope.items = data.data.products;
            });


        function inList(item, array) {
            for (var i = 0; i < array.length; i++) {
                if (array[i].name === item.name) {
                    return i;
                };
            };
        };

        $scope.buy = function(item) {
            var index = inList(item, $scope.mylist);

            if (index !== undefined) {
                $scope.mylist[index].count++;
            } else {
                item.count = 1;
                $scope.mylist.unshift(item);
            }
        };
        $scope.delete = function(index) {
            $scope.mylist.splice(index, 1);
        };

        /*ionic.Platform.ready(function() {
          $scope.words = '9';
        });*/

    }
]);
