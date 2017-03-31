var app = angular.module('plunker', ['ui.bootstrap']);

app.controller('MainCtrl', [ '$scope', '$uibModal',
  function($scope, $uibModal) {
    $scope.name = 'World';

    var $ctrl = this;

    $ctrl.open = function () {
      console.log("Opening ...");
      var modalInstance = $uibModal.open({
        animation: $ctrl.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'modal.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: '$ctrl'
      });

      modalInstance.result.then(function (selectedItem) {
        $ctrl.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  }
]);
