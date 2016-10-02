angular.module('starter.controllers')

    .controller('ProfileCtrl', function ($scope, profileFactory, $ionicPopup, $state, $ionicLoading, $cordovaToast) {

        // variable's
        var originNickname;
        var successMessage;
        var errorMessage = '오류가 발생하였습니다. 잠시 후 다시 시도해주세요.';
        var duration = 2000; 
        $scope.myProfileInfo;
        $scope.password = {};

        // function's
        $scope.getImageFromGallery = getImageFromGallery;
        $scope.profileInfoChangeCheck = profileInfoChangeCheck;
        $scope.editProfile = editProfile;
        $scope.changePassword = changePassword;

        $scope.profileSetting = [
            { text: "내정보", value: "info" },
            { text: "비밀번호 변경", value: "password" }
        ];

        $scope.data = {
            profile: "내정보"
        };

        $scope.$on("$ionicView.beforeEnter", function () {
            getProfile();
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
                    $state.go('app.rank');
                }
            })
        }

        function getProfile() {
            console.log("getProfile");

            $ionicLoading.show();

            profileFactory.getProfile().then(function success(response) {
                console.log(response.data);

                $ionicLoading.hide();

                if (typeof response.data[0].sess.member == 'undefined') {
                    console.log("failed to session login");
                    loginPopup();
                    return;
                }
                else {
                    $scope.myProfileInfo = response.data[0].sess.member;
                    console.log($scope.myProfileInfo);
                    originNickname = $scope.myProfileInfo.nick_name;
                    console.log(originNickname);
                }

            }, function error(error) {
                console.log("error");
                console.log(error);
                showMessages(errorMessage, duration);
            });
        }

        function getImageFromGallery() {
            // todo : 사진선택 혹은 카메라 선택
            console.log("getImageFromGallery");
        }

        function profileInfoChangeCheck() {
            if ($scope.myProfileInfo.nick_name == originNickname) {
                return true;
            }
            else {
                return false;
            }
        }

        function editProfile() {

            $ionicLoading.show();

            console.log("editProfile");
            console.log($scope.myProfileInfo);
            console.log($scope.myProfileInfo.nick_name);

            profileFactory.editProfile($scope.myProfileInfo).then(function success(response) {
                
                $ionicLoading.hide();

                console.log(response.data);
                if (response.data) {
                    // 내정보 변경완료 팝업창 띄우기
                    $cordovaToast.show('프로필 정보가 변경되었습니다.', 'short', 'bottom');
                }
                else {
                    // 내정보 변경완료 실패 팝업창 띄우기
                    showMessages(errorMessage, duration);
                }
            }, function error(error) {
                console.log(error);
                // 서버 오류 메시지 띄우기
                showMessages(errorMessage, duration);
            });
        }

        function changePassword() {

            $ionicLoading.show();

            console.log("changePassword");

            console.log($scope.password.oldPassword);
            console.log($scope.password.newPassword);

            profileFactory.changePassword($scope.password.oldPassword, $scope.password.newPassword).then(function success(response) {
                
                $ionicLoading.hide();
                
                console.log(response.data);
                if(response.data.success) {
                    $cordovaToast.show('비밀번호가 변경 되었습니다.', 'short', 'bottom');
                } 
                else {
                    showMessages(response.data.reason, duration);
                }
            }, function error(error) {
                console.log("error");
                console.log(error);
                showMessages(errorMessage, duration);
            });
        }

        function showMessages(message, time) {
            $ionicLoading.show({
                template: message,
                duration: time
            });
        }
    });
