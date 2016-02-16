ionicApp.controller('MainCtrl', ['$scope', '$http', 'ProductService', '$ionicModal',
    function($scope, $http, ProductService, $ionicModal) {
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

        $scope.edit = function(item) {
        	$scope.itemToEdit = item;
        	//warning
        	$scope.editedItem = Object.assign({}, item);
        	$scope.openModal();
        };

        $scope.save = function() {
        	//warning
        	$scope.itemToEdit.count = $scope.editedItem.count;
        	$scope.closeModal();
        };

        $scope.cancel = function() {
        	$scope.editedItem = {};
        	$scope.closeModal();
        };
        //MODAL
        $ionicModal.fromTemplateUrl('template/mymodal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function() {
            $scope.modal.show();
        };
        $scope.closeModal = function() {
            $scope.modal.hide();
        };
        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function() {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function() {
            // Execute action
        });
    }
]);
