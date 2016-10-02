angular.module('starter')

    .factory('profileFactory', function($http, UrlsFactory) {

        // 내 프로필 조회
        function getProfile() {
            return $http({
                method: 'GET',
                url: UrlsFactory.get_profile
            }); 
        }

        function editProfile(member) {
            return $http({
                method: 'POST',
                url: UrlsFactory.editProfile,
                data: member,
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            });
        }

        function changePassword(originPassword, currentPassword) {
            var member = {member:{
                oldPassword: originPassword,
                newPassword: currentPassword
            }};

            return $http({
                method: 'POST',
                url: UrlsFactory.changePassword,
                data: member,
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            });
        }

        return {
            getProfile : getProfile,
            editProfile : editProfile,
            changePassword : changePassword
        }
    });