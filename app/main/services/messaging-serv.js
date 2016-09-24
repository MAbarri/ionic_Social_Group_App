'use strict';
angular.module('main')
  .service('Messaging', function ($log, $timeout, $http, DEV_CONSTANTS) {
    $log.log('MessagingService Loading');

    // some initial data
    // this.someData = {
    //   binding: 'Yes! Got that databinding working'
    // };
    //
    // this.changeBriefly = function () {
    //   var initialValue = this.someData.binding;
    //   this.someData.binding = 'Yeah this was changed';
    //
    //   var that = this;
    //   $timeout(function () {
    //     that.someData.binding = initialValue;
    //   }, 500);
    // };

    return {
      all: function () {
        return $http.get(DEV_CONSTANTS.SERVER_URL+'chats');
      },
      remove: function (chatId) {
        return $http.delete(DEV_CONSTANTS.SERVER_URL+'chats' + chatId);
      },
      get: function (chatId) {
        return $http.get(DEV_CONSTANTS.SERVER_URL+'chats' + chatId);
      }
    };

  });
