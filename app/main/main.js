'use strict';
angular.module('main', [
    'ionic',
    'ngCordova',
    'ui.router',
    'monospaced.elastic',
    'angularMoment',
    'ion-gallery'
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
      })
      .state('events', {
        url: '/events',
        templateUrl: 'main/templates/events.html',
        controller: 'eventsCtrl'
      })
      .state('eventsAdmin', {
        url: '/eventsAdmin',
        templateUrl: 'main/templates/events-admin.html',
        controller: 'eventsAdminCtrl'
      })
      .state('topPosts', {
        url: '/top-posts',
        templateUrl: 'main/templates/top-posts.html',
        controller: 'topPostsCtrl'
      })
      .state('gallery', {
        url: '/gallery',
        templateUrl: 'main/templates/gallery.html',
        controller: 'galleryCtrl'
      });
  })
  .constant("DEV_CONSTANTS", {
    "SERVER_URL": "http://192.168.1.2:3004/"
  });
