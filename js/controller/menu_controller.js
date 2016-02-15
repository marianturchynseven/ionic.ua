ionicApp.controller('MenuCtrl', function($scope, $ionicSideMenuDelegate, $ionicModal) {              
  $ionicModal.fromTemplateUrl('modal.html', function (modal) {
    $scope.modal = modal;
  }, {
    animation: 'slide-in-up'
  });
 })