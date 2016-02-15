ionicApp.controller('SlideboxCtrl', function($scope, $ionicSlideBoxDelegate) {
    console.log('SlideboxCtrl');
    $scope.nextSlide = function() {
        $ionicSlideBoxDelegate.next();
    }
})
