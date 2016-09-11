angular.module('starter.services',[])
  .factory('Messaging', function($http) {

  return {
    all: function() {
      return $http.get('http://localhost:3000/cars');
    },
    remove: function(chatId) {
      return $http.delete('http://localhost:3000/cars/'+chatId);
    },
    get: function(chatId) {
      return $http.get('http://localhost:3000/cars/'+chatId);
    }
  };
  })
  .factory('Chats', function() {
  });
