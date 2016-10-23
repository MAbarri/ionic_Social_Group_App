'use strict';
angular.module('main')
  .controller('galleryCtrl', ['$scope', '$rootScope', '$state', '$stateParams', '$log', '$ionicModal', '$ionicSlideBoxDelegate',
    function($scope, $rootScope, $state, $stateParams, $log, $ionicModal, $ionicSlideBoxDelegate) {


      $scope.$on('$ionicView.beforeEnter', function(event, viewData) {
        viewData.enableBack = true;
      });
      $scope.images = [];

      $scope.loadImages = function() {
        $scope.images = [{
          id: 0,
          src: "adam",
          msg: ''
        }, {
          id: 1,
          src: "Coloring",
          msg: ''
        }, {
          id: 2,
          src: "delorean",
          msg: ''
        }, {
          id: 3,
          src: "max",
          msg: ''
        }, {
          id: 4,
          src: "mike",
          msg: ''
        }];
      }


      $scope.aImages = [];

      $ionicModal.fromTemplateUrl('main/templates/picturesShowroom.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });

      $scope.openModal = function(index) {
        $scope.aImages = $scope.images;
        $ionicSlideBoxDelegate.slide(index);
        $scope.modal.show();
      };

      $scope.closeModal = function() {
        $scope.modal.hide();
      };

      // Cleanup the modal when we're done with it!
      $scope.$on('$destroy', function() {
        $scope.modal.remove();
      });
      // Execute action on hide modal
      $scope.$on('modal.hide', function() {
        // Execute action
      });
      // Execute action on remove modal
      $scope.$on('modal.removed', function() {
        // Execute action
      });
      $scope.$on('modal.shown', function() {
        console.log('Modal is shown!');
      });

      // Call this functions if you need to manually control the slides
      $scope.next = function() {
        $ionicSlideBoxDelegate.next();
      };

      $scope.previous = function() {
        $ionicSlideBoxDelegate.previous();
      };

      $scope.goToSlide = function(index) {
          $scope.modal.show();
          $ionicSlideBoxDelegate.slide(index);
        }
        // Called each time the slide changes
      $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
      };
      $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        $scope.modal.remove();
      });
    }
  ]);
