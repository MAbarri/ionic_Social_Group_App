'use strict';
angular.module('main')
  .service('topPostsService', function ($log, $timeout, $http) {
    $log.log('topPostsService Loading');

    return {
      all: function () {
        return $http.get('http://192.168.1.3:3004/topPosts');
      },
      remove: function (chatId) {
        return $http.delete('http://192.168.1.3:3004/topPosts/' + chatId);
      },
      get: function (chatId) {
        return $http.get('http://192.168.1.3:3004/topPosts/' + chatId);
      }
    };

  });
