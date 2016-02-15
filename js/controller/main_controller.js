ionicApp.controller('MainCtrl', function($scope) {
    $scope.items = [];

    for (var i = 1; i < 5; i++) {
        var item = {
            name: 'product-' + i,
            price: i * 10
        };
        console.log(item.price);
        $scope.items.push(item);
    }


    /*ionic.Platform.ready(function() {
      $scope.words = '9';
    });*/

});
