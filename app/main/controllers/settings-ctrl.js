'use strict';
angular.module('main')
  .controller('SettingsCtrl', function($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
