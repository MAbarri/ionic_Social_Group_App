angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state, $ionicLoading, $ionicPopup, $ionicModal, $rootScope) {

  $ionicModal.fromTemplateUrl('templates/signup.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
  $scope.signIn=function(item){
    console.log(item);
    if(item.email && item.pwdForLogin)
    {
      $state.go('tab.newsfeed')      
    }
  };
  })
  .controller('NewsFeedCtrl', function($scope) {})

.controller('MessagingCtrl', function($scope, Messaging) {
  $scope.chats = Messaging.all().then(function(resp){
    console.log(resp);
  });
  $scope.openChatRoom = function(roomId) {
    $state.go('tab.chat-detail', {
      roomId: roomId
    });
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    console.log("Chat Controller initialized");

    $scope.IM = {
      textMessage: ""
    };

    Chats.selectRoom($state.params.roomId);

    var roomName = Chats.getSelectedRoomName();

    // Fetching Chat Records only if a Room is Selected
    if (roomName) {
      $scope.roomName = " - " + roomName;
      $scope.chats = Chats.all();
    }

    $scope.sendMessage = function(msg) {
      console.log(msg);
      Chats.send($scope.displayName, msg);
      $scope.IM.textMessage = "";
    }

    $scope.remove = function(chat) {
      Chats.remove(chat);
    }
  })
  .controller('SettingsCtrl', function($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
