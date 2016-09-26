angular.module('starter.controllers')

    .controller('ReportCtrl', function ($scope, reportFactory, $ionicPopup, $state) {

        // variable's
        $scope.myProfile;
        $scope.myReport;

        // fuction's
        //$scope.loginCheck = loginCheck;

        var commentList = [
            '"핸드폰 중독자니...?"',
            '"너무 슬퍼하지 말고 프로필을 바꿔보세요!"',
            '"좋아요, 이대로만 합시다!"',
            '"당신을 얼짱으로 임명합니다."',
            '"세상에! 연예인 이세요?"',
            '"최고에요! 페이싱유를 대표하는 얼짱!"'
        ]

        $scope.$on("$ionicView.beforeEnter", function () {

            reportFactory.getProfile().then(function success(response) {
                console.log(response.data);

                if (typeof response.data[0].sess.member == 'undefined') {
                    console.log("failed to session login");
                    loginPopup();
                    return;
                }
                else {
                    $scope.myProfile = response.data[0].sess.member;
                    console.log($scope.myProfile);

                    reportFactory.getReport().then(function success(response) {
                        console.log(response.data[0]);
                        $scope.myReport = response.data[0];

                    }, function error(error) {
                        console.log(error);
                    });
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
                if(response) {
                    $state.go('login');
                } 
                else {
                    console.log("로그인 팝업창 닫기");
                }
            })
        }

    });
