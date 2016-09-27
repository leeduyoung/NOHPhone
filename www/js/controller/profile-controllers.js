angular.module('starter.controllers')

    .controller('ProfileCtrl', function ($scope, profileFactory, $ionicPopup, $state) {

        // variable's
        $scope.myProfileInfo;

        $scope.profileSetting = [
            { text: "내정보", value: "info" },
            { text: "비밀번호 변경", value: "password" }
        ];

        $scope.data = {
            profile: "내정보"
        };

        $scope.$on("$ionicView.beforeEnter", function () {

            profileFactory.getProfile().then(function success(response) {
                console.log(response.data);

                if (typeof response.data[0].sess.member == 'undefined') {
                    console.log("failed to session login");
                    loginPopup();
                    return;
                }
                else {
                    $scope.myProfileInfo = response.data[0].sess.member;
                    console.log($scope.myProfileInfo);
                }

            }, function error(error) {
                console.log(error);
            });
        });

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
                }
            })
        }
    });
