angular.module('starter.controllers')

    .controller('ForgotpasswordCtrl', function ($scope, $ionicHistory) {

        $scope.goBack = goBack;

        function goBack() {
            $ionicHistory.goBack();
        }
    });