'use strict';
angular.module('main')
  .service('eventsAdminService', function ($log, $timeout, $http, DEV_CONSTANTS) {
    $log.log('eventsAdminService Loading');

    return {
      all: function () {
        return $http.get(DEV_CONSTANTS.SERVER_URL+'events');
      },
      remove: function (itemId) {
        return $http.delete(DEV_CONSTANTS.SERVER_URL+'events/' + itemId);
      },
      get: function (chatId) {
        return $http.get(DEV_CONSTANTS.SERVER_URL+'events/' + chatId);
      },
      update: function (item) {
        return $http.put(DEV_CONSTANTS.SERVER_URL+'events/' + item.id,item);
      },
      set: function (item) {
        if(item.title && item.text)
        return $http.post(DEV_CONSTANTS.SERVER_URL+'events', item);
      }
    };

  });
