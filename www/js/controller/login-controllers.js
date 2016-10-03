angular.module('starter.controllers')

  .controller('LoginCtrl', function ($scope, $ionicHistory, $ionicLoading, LoginFactory) {

    $scope.goBack = goBack;
    $scope.loginData = {};
    $scope.login = login;

    function goBack() {
      $ionicHistory.goBack();
    }

    function login() {

      $ionicLoading.show();

      LoginFactory.login($scope.loginData.id, $scope.loginData.password).then(function success(response) {
        console.log(response);

        if (response.data) {
          // 로그인 성공
          console.log(response.data);
          $ionicLoading.hide();

          closeLogin();
        }
        else {
          // 로그인 실패
          console.log("로그인 실패");
          showMessages('아이디와 비밀번호를 확인해주세요.', 2000);
        }
      }, function error(error) {
        console.log(error);
        showMessages('오류가 발생하였습니다. 잠시 후 다시 시도해주세요.', 2000);
      });
    }

    function showMessages(message, time) {
      $ionicLoading.show({
        template: message,
        duration: time
      });
    }

    function closeLogin() {
      $ionicHistory.nextViewOptions({
        disableBack: true
      });

      $state.go('app.home');
    }
  });