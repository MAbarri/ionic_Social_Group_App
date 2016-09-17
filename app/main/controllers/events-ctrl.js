'use strict';
angular.module('main')
  .controller('eventsCtrl', ['$scope', '$rootScope', '$state', '$stateParams', '$log','$ionicModal', '$ionicSlideBoxDelegate','eventsService',
    function($scope, $rootScope, $state, $stateParams, $log,$ionicModal,$ionicSlideBoxDelegate,eventsService) {

      $scope.items = [];

      init();

      $scope.$on('$ionicView.beforeEnter', function(event, viewData) {
        viewData.enableBack = true;
      });

      function init(){
        eventsService.all().then(function (response) {
          $scope.items = response.data;
        });
      }

      $scope.toggleItem = function(item) {
        if ($scope.isItemShown(item)) {
          $scope.shownItem = null;
        } else {
          $scope.shownItem = item;
        }
      };
      $scope.isItemShown = function(item) {
        return $scope.shownItem === item;
      };
      $scope.openPictures = function(item) {
        alert('showing pictures for item ' + item.title)
      }

      // modal ------------------------------------------------------------------------


      $scope.aImages = [];

      $ionicModal.fromTemplateUrl('main/templates/picturesShowroom.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });

      $scope.openModal = function(item) {
        for(var i=0;i<item.relatedPictures.length; i++){
          $scope.aImages.push(item.relatedPictures[i]);
        }
        $ionicSlideBoxDelegate.slide(0);
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
    }
  ]);
