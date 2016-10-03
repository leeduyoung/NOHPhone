angular.module('starter')

    .factory('LoginFactory', function($http, UrlsFactory) {

        // function getProfile() {
        //     return $http({
        //         method: 'GET',
        //         url: UrlsFactory.get_profile
        //     }); 
        // }

        function login(memberId, memberPassword) {
            var member = {
                'member': {
                    id : memberId,
                    password : memberPassword
                }
            }

            return $http({
                method: 'POST',
                url: UrlsFactory.login,
                data: member,
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            });
        }

        return {
            login : login
        }
    });