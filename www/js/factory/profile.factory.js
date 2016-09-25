angular.module('starter')

    .factory('profileFactory', function($http, UrlsFactory) {

        // 내 프로필 조회
        function getProfile(memberId) {
            return $http({
                method: 'GET',
                url: UrlsFactory.get_profile
            }); 
        }

        return {
            getProfile : getProfile
        }
    });