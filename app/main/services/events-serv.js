'use strict';
angular.module('main')
  .service('eventsService', function ($log, $timeout, $http, DEV_CONSTANTS) {
    $log.log('eventsService Loading');

    return {
      all: function () {
        return $http.get(DEV_CONSTANTS.SERVER_URL+'events');
      },
      remove: function (chatId) {
        return $http.delete(DEV_CONSTANTS.SERVER_URL+'events/' + chatId);
      },
      get: function (chatId) {
        return $http.get(DEV_CONSTANTS.SERVER_URL+'events/' + chatId);
      }
    };

  });
