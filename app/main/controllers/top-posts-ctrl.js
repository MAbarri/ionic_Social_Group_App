'use strict';
angular.module('main')
  .controller('topPostsCtrl', ['$scope', '$rootScope', '$state', '$stateParams', '$log', '$ionicModal', '$ionicSlideBoxDelegate', 'topPostsService',
    function($scope, $rootScope, $state, $stateParams, $log, $ionicModal, $ionicSlideBoxDelegate, topPostsService) {

      $scope.doneLoading = false
      $scope.data = {
        rangeValue: 0
      }
        $scope.today = moment(new Date()).format('dddd');

      $scope.$on('$ionicView.beforeEnter', function(event, viewData) {
        viewData.enableBack = true;
      });

      function init() {
        $scope.selectedDate = moment(new Date()).subtract(7-$scope.data.rangeValue, 'days').format('dddd');

        $scope.items = [];

        topPostsService.all().then(function(response) {
          $scope.items = response.data;
          $scope.doneLoading = true;
        });
      }
      init();

      $scope.rangeChange = function() {
        $log.debug($scope.data.rangeValue);
        $scope.doneLoading = false
        $scope.items = [];
        init();
      }
    }
  ]);
