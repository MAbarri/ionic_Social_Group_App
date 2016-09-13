'use strict';
angular.module('main', [
    'ionic',
    'ngCordova',
    'ui.router',
    'monospaced.elastic',
    'angularMoment'
    // TODO: load other modules selected during generation
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    // ROUTING with ui.router
    $urlRouterProvider.otherwise('/login');
    $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
      .state('login', {
        url: '/login',
        templateUrl: 'main/templates/login.html',
        controller: 'LoginCtrl'
      })
      .state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'main/templates/tabs.html'
      })
      .state('main.newsfeed', {
        url: '/newsfeed',
        views: {
          'tab-news-feed': {
            templateUrl: 'main/templates/tab-news-feed.html',
            controller: 'NewsFeedCtrl'
          }
        }
      })

    .state('main.messaging', {
        url: '/messaging',
        views: {
          'tab-messaging': {
            templateUrl: 'main/templates/tab-messaging.html',
            controller: 'MessagingCtrl'
          }
        }
      })
      .state('main.settings', {
        url: '/settings',
        views: {
          'tab-settings': {
            templateUrl: 'main/templates/tab-settings.html',
            controller: 'SettingsCtrl'
          }
        }
      })
      .state('conversation', {
        url: '/conversation',
        templateUrl: 'main/templates/conversation.html',
        controller: 'conversationCtrl'
      });
  });
