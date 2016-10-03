angular.module('starter.controllers')

  .controller('SignupCtrl', function ($scope, $ionicHistory) {

    $scope.goBack = goBack;

    function goBack() {
      $ionicHistory.goBack();
    }

  });