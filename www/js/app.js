// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

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
        templateUrl: 'templates/tab/tabs.html',
        controller: 'TabCtrl'
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
        templateUrl: 'templates/account/login.html',
        controller: 'LoginCtrl'
      })

      //회원가입  
      .state('signup', {
        url: '/signup',
        templateUrl: 'templates/account/signup.html',
        controller: 'SignupCtrl'
      })

      //비밀번호 찾기
      .state('forgotpassword', {
        url: '/forgotpassword',
        templateUrl: 'templates/account/forgotpassword.html',
        controller: 'ForgotpasswordCtrl'
      })      

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
