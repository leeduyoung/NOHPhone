// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/tab/tabs.html'
      })

      // Each tab has its own nav history stack:
      .state('app.rank', {
        url: '/rank',
        views: {
          'tab-rank': {
            templateUrl: 'templates/tab/tab-rank.html',
            controller: 'RankCtrl'
          }
        }
      })

      //로그인
      .state('login', {
        url: '/login',
        templateUrl: 'templates/account/login.html'
      })

      //회원가입  
      .state('signUp', {
        url: '/signUp',
        templateUrl: 'templates/account/signUp.html'
      })

      // 로그인
      // .state('app.login', {
      //   url: '/login',
      //   views: {
      //     'login': {
      //       templateUrl: 'templates/account/login.html'
      //     }
      //   }
      // })

      //회원가입
      // .state('app.signUp', {
      //   url: '/signup',
      //   views: {
      //     'signup': {
      //       templateUrl: 'templates/account/signup.html',
      //       controller: 'SignUpCtrl'
      //     }
      //   }
      // })

      .state('app.profile', {
        url: '/profile',
        views: {
          'tab-profile': {
            templateUrl: 'templates/tab/tab-profile.html',
            controller: 'ProfileCtrl'
          }
        }
      })

      .state('app.report', {
        url: '/report',
        views: {
          'tab-report': {
            templateUrl: 'templates/tab/tab-report.html',
            controller: 'ReportCtrl'
          }
        }
      })

      .state('app.chats', {
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: 'templates/tab/tab-chats.html',
            controller: 'ChatsCtrl'
          }
        }
      })

      .state('app.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'templates/tab/chat-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })

      .state('app.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/rank');

  });
