'use strict';
angular.module('main')
  .controller('conversationCtrl', ['$scope', '$rootScope', '$state', '$stateParams', '$ionicActionSheet',
    '$ionicPopup', '$timeout', '$ionicScrollDelegate', 'conversationService', '$interval',
    function($scope, $rootScope, $state, $stateParams, $ionicActionSheet,
      $ionicPopup, $timeout, $ionicScrollDelegate, conversationService, $interval) {

      $scope.doneLoading = false;

      var messageCheckTimer;
      var viewScroll = $ionicScrollDelegate.$getByHandle('userMessageScroll');
      var footerBar; // gets set in $ionicView.enter
      var scroller;
      var txtInput; // ^^^

      $scope.$on('$ionicView.enter', function() {
        console.log('UserMessages $ionicView.enter');

        getMessages();

        $timeout(function() {
          footerBar = document.body.querySelector('#userMessagesView .bar-footer');
          scroller = document.body.querySelector('#userMessagesView .scroll-content');
          txtInput = angular.element(footerBar.querySelector('textarea'));
        }, 0);

        messageCheckTimer = $interval(function() {
          // here you could check for new messages if your app doesn't use push notifications or user disabled them
        }, 20000);
      });
      
      // mock acquiring data via $stateParams
      $scope.toUser = {
        _id: '534b8e5aaa5e7afc1b23e69b',
        pic: 'http://ionicframework.com/img/docs/venkman.jpg',
        username: 'Venkman'
      }

      // this could be on $rootScope rather than in $stateParams
      $scope.user = {
        _id: '534b8fb2aa5e7afc1b23e69c',
        pic: 'http://ionicframework.com/img/docs/mcfly.jpg',
        username: 'Marty'
      };

      // $scope.messages = [{
      //   userId: '534b8e5aaa5e7afc1b23e69b',
      //   text: 'hi man',
      //   date: new Date()
      // }, {
      //   userId: '534b8e5aaa5e7afc1b23e69b',
      //   text: 'duuuuuuuuuuuuude',
      //   date: new Date()
      // }, {
      //   userId: '534b8fb2aa5e7afc1b23e69c',
      //   text: 'ssup homie',
      //   date: new Date()
      // }, {
      //   userId: '534b8e5aaa5e7afc1b23e69b',
      //   text: 'u doing good ?',
      //   date: new Date()
      // }];

      function getMessages() {
        // the service is mock but you would probably pass the toUser's GUID here
        conversationService.getUserMessages({
          toUserId: $scope.toUser._id
        }).then(function(data) {
          $scope.doneLoading = true;
          $scope.messages = data.messages;

          $timeout(function() {
            viewScroll.scrollBottom();
          }, 0);
        });
      }

      $scope.onMessageHold = function(e, itemIndex, message) {
        console.log('onMessageHold');
        console.log('message: ' + JSON.stringify(message, null, 2));
        $ionicActionSheet.show({
          buttons: [{
            text: 'Copy Text'
          }, {
            text: 'Delete Message'
          }],
          buttonClicked: function(index) {
            switch (index) {
              case 0: // Copy Text
                //cordova.plugins.clipboard.copy(message.text);

                break;
              case 1: // Delete
                // no server side secrets here :~)
                $scope.messages.splice(itemIndex, 1);
                $timeout(function() {
                  viewScroll.resize();
                }, 0);

                break;
            }

            return true;
          }
        });
      };

      function onProfilePicError(ele) {
        this.ele.src = 'main/assets/images/ben.png'; // set a fallback
      }
      // this keeps the keyboard open on a device only after sending a message, it is non obtrusive
      function keepKeyboardOpen() {
        console.log('keepKeyboardOpen');
        txtInput.one('blur', function() {
          console.log('textarea blur, focus back on it');
          txtInput[0].focus();
        });
      }
      $scope.sendMessage = function(sendMessageForm) {
        var message = {
          toId: $scope.toUser._id,
          text: $scope.input.message
        };

        // if you do a web service call this will be needed as well as before the viewScroll calls
        // you can't see the effect of this in the browser it needs to be used on a real device
        // for some reason the one time blur event is not firing in the browser but does on devices
        keepKeyboardOpen();

        //MockService.sendMessage(message).then(function(data) {
        $scope.input.message = '';

        message._id = new Date().getTime(); // :~)
        message.date = new Date();
        message.username = $scope.user.username;
        message.userId = $scope.user._id;
        message.pic = $scope.user.picture;

        $scope.messages.push(message);

        $timeout(function() {
          keepKeyboardOpen();
          viewScroll.scrollBottom(true);
        }, 0);

        $timeout(function() {
          $scope.messages.push({
            userId: '534b8e5aaa5e7afc1b23e69b',
            date: new Date(),
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se.'
          });
          keepKeyboardOpen();
          viewScroll.scrollBottom(true);
        }, 2000);

        //});
      };

    }
  ]);
