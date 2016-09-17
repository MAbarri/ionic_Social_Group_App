'use strict';
angular.module('main')
  .service('eventsService', function ($log, $timeout, $http) {
    $log.log('eventsService Loading');

    return {
      all: function () {
        return $http.get('http://192.168.1.3:3004/events');
      },
      remove: function (chatId) {
        return $http.delete('http://192.168.1.3:3004/events/' + chatId);
      },
      get: function (chatId) {
        return $http.get('http://192.168.1.3:3004/events/' + chatId);
      }
    };

  });
