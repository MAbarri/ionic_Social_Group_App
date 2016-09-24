'use strict';
angular.module('main')
  .controller('galleryCtrl', ['$scope', '$rootScope', '$state', '$stateParams', '$log','$ionicModal', '$ionicSlideBoxDelegate',
    function($scope, $rootScope, $state, $stateParams, $log,$ionicModal,$ionicSlideBoxDelegate) {

      var imageURI="main/assets/images/coloring.png";

      $scope.$on('$ionicView.beforeEnter', function(event, viewData) {
        viewData.enableBack = true;
      });
    }
  ]);
