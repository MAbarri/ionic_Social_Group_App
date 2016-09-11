'use strict';
angular.module('main')

.controller('LoginCtrl', function ($scope, $state, $log, $ionicLoading, $ionicPopup, $ionicModal) {

  $ionicModal.fromTemplateUrl('main/templates/signup.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function () {
    $scope.modal.show();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function () {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function () {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function () {
    // Execute action
  });
  $scope.signIn = function (item) {
    $log.log(item);
    if (item.email && item.pwdForLogin) {
      $state.go('main.newsfeed')
    }
  };
});
