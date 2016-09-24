'use strict';
angular.module('main')
  .factory('conversationService', ['$http', '$q', '$log','DEV_CONSTANTS',
    function($http, $q, $log,DEV_CONSTANTS) {
      var me = {};

      var endpoint = DEV_CONSTANTS.SERVER_URL+'conversations/';

      me.getUserMessages = function(d) {

        return $http.get(endpoint).then(function(response) {
          return response.data;
        }, function(err) {
          console.log('get user messages error, err: ' + JSON.stringify(
            err, null, 2));
        });
      };
      me.sendMessage = function(message) {
        return $http({
          method: 'POST',
          url: endpoint,
          headers: {
            'Content-Type': 'application/json'
          },
          data: message
        }).then(function(response) {
          return response.data;
        }, function(err) {
          console.log('get user messages error, err: ' + JSON.stringify(
            err, null, 2));
        });
      };

      me.getMockMessage = function() {
        return {
          userId: '534b8e5aaa5e7afc1b23e69b',
          date: new Date(),
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        };
      }

      return me;
    }
  ]);
