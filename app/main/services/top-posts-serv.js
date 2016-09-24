'use strict';
angular.module('main')
  .service('topPostsService', function ($log, $timeout, $http, DEV_CONSTANTS) {
    $log.log('topPostsService Loading');

    return {
      all: function () {
        return $http.get(DEV_CONSTANTS.SERVER_URL+'topPosts');
      },
      remove: function (chatId) {
        return $http.delete(DEV_CONSTANTS.SERVER_URL+'topPosts/' + chatId);
      },
      get: function (chatId) {
        return $http.get(DEV_CONSTANTS.SERVER_URL+'topPosts/' + chatId);
      }
    };

  });
