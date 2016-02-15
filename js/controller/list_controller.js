ionicApp.controller('ListCtrl', function ($scope) {
  console.log('ListCtrl');
  $scope.data = {
    showDelete: false
  };
    
  $scope.itemButtons = [
    {
      text: 'Delete',
      type: 'button-assertive',
      onTap: function (item) {
        alert('Delete Item: ' + item.id + ' ?');
      }
    }
  ];


  $scope.onItemDelete = function (item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };

  $scope.items = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    },
    {
      id: 5
    },
    {
      id: 6
    },
    {
      id: 7
    },
    {
      id: 8
    },
    {
      id: 9
    },
    {
      id: 10
    }
  ];

});