angular.module('starter')

    .factory('ReportFactory', function($http, UrlsFactory) {

        // 내 프로필 조회
        function getProfile() {
            return $http({
                method: 'GET',
                url: UrlsFactory.get_profile
            }); 
        }

        // 내 사용시간 조회
        function getReport(memberId) {
            return $http({
                method: 'GET',
                url: UrlsFactory.get_report
            });
        }
        // function getReport(memberId) {
        //     return $http({
        //         method: 'GET',
        //         url: UrlsFactory.get_report,
        //         data: memberId,
        //         headers: { 'Content-Type': 'application/json; charset=utf-8' }
        //     });
        // }

        return {
            getProfile : getProfile,
            getReport : getReport
        }
    });