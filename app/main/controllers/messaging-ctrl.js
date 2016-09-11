'use strict';
angular.module('main')
  .controller('MessagingCtrl', function ($scope, $log, $state, Messaging) {

    Messaging.all().then(function (response) {
      $scope.conversations = response.data;
      $log.debug(response.data);
    });
    $scope.openChatRoom = function (roomId) {
      $state.go('conversation', {
        roomId: roomId
      });
    }
  });
