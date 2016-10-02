angular.module('starter.controllers')

  .controller('LoginCtrl', function ($scope, $ionicHistory) {

    $scope.goBack = function () {
      $ionicHistory.goBack();
    }
  });