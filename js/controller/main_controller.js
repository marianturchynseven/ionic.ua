ionicApp.controller('MainCtrl', function($scope) {
console.log('321');
    $scope.words = '2';  
    
    $scope.speak = function() {
        $scope.words = '3';
    };
  ionic.Platform.ready(function() {
    $scope.words = '9';
  });

 });