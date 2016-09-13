'use strict';
angular.module('main')
  .service('Messaging', function ($log, $timeout, $http) {
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
        return $http.get('http://192.168.1.6:3003/cars');
      },
      remove: function (chatId) {
        return $http.delete('http://192.168.1.6:3003/cars/' + chatId);
      },
      get: function (chatId) {
        return $http.get('http://192.168.1.6:3003/cars/' + chatId);
      }
    };

  });
