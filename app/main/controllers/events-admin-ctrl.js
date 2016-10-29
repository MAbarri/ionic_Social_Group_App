'use strict';
angular.module('main')
  .controller('eventsAdminCtrl', ['$scope', '$rootScope', '$state', '$stateParams', '$log', '$ionicModal', '$ionicSlideBoxDelegate', 'eventsAdminService',
    function($scope, $rootScope, $state, $stateParams, $log, $ionicModal, $ionicSlideBoxDelegate, eventsAdminService) {

      $scope.items = [];
      $scope.model = {};
      $scope.doneLoading = false;
      $scope.listCanSwipe = true
      $scope.$on('$ionicView.beforeEnter', function(event, viewData) {
        viewData.enableBack = true;
      });

      $scope.doRefresh = function() {
        eventsAdminService.all().then(function(items) {
          //Stop the ion-refresher from spinning
          $scope.items = items.data;
          $scope.doneLoading = true;
          for (var i = 0; i < $scope.items.length; i++) {
            $scope.items[i].text = $scope.fixLineBreaks($scope.items[i].text);
          }
          $scope.$broadcast('scroll.refreshComplete');
        });
      };
      $scope.fixLineBreaks = function(str) {
        return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
      };

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
        for (var i = 0; i < item.relatedPictures.length; i++) {
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
      $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        $scope.modal.remove();
      });

      $scope.addEvent = function() {

      };

      $ionicModal.fromTemplateUrl('main/templates/add-item.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal2 = modal;
      });

      $scope.addEvent = function() {
        $scope.modal2.show();
      };
      // Cleanup the modal when we're done with it!
      $scope.$on('$destroy', function() {
        $scope.modal2.remove();
      });
      // Execute action on hide modal
      $scope.$on('modal2.hidden', function() {
        // Execute action
      });
      // Execute action on remove modal
      $scope.$on('modal2.removed', function() {
        // Execute action
      });
      $scope.uploadImage = function() {
        window.alert('Working on it !')
      }
      $scope.createEvent = function() {
        eventsAdminService.set($scope.model).then(function() {
          $log.debug('Success')
          $scope.modal2.hide();
          $scope.doRefresh();
        });
      }
      $scope.editEventService = function() {
        eventsAdminService.update($scope.model).then(function() {
          $log.debug('Success')
          $scope.modal2.hide();
          $scope.doRefresh();
        });
      }
      $scope.editEvent = function(item) {
        $scope.model = item;
        $scope.isEdit = true;
        $scope.modal2.show();
      }
      $scope.deleteEvent = function(item) {
        $scope.model = item;
        eventsAdminService.remove($scope.model.id).then(function() {
          $log.debug('Success')
          $scope.modal2.hide();
          $scope.doRefresh();
        });
      }

      $scope.doRefresh();
    }
  ]);
