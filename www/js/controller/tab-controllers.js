angular.module('starter.controllers', [])

  .controller('TabCtrl', function ($scope, $state, $ionicPopup, DataFactory) {

    $scope.loginCheck = loginCheck;

    //메뉴이동시 로그인 상태 검사
    function loginCheck(state) {

      console.log(DataFactory.getLoginedMember());

      if(DataFactory.getLoginedMember()) {
          // 로그인 됨
          $state.go(state);
      } 
      else {
          // 로그인 안됨
          loginPopup(); //로그인 팝업 띄우기
      }
    }
    
    function loginPopup() {
        var confirmPopup = $ionicPopup.confirm({
            title: '로그인 하시겠습니까?',
            cancelText: '아니오',
            okText: '예'
        });

        confirmPopup.then(function (response) {
            if (response) {
                $state.go('login');
            }
            else {
                console.log("로그인 팝업창 닫기");
                $state.go('app.rank');
            }
        });
    }

  });