'use strict';
angular.module('main')
  .controller('MessagingCtrl', function ($scope, $log, $state, Messaging) {

    Messaging.all().then(function (response) {
      $log.debug(response.data);
      $scope.conversations = response.data;
    });
    $scope.openChatRoom = function (roomId) {
      $state.go('conversation', {
        roomId: roomId
      });
    }
  });
