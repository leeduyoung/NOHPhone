angular.module('starter')

    .factory('UrlsFactory', function(){

        /* device 용 */
        // var host = 'http://52.78.5.104:3000';
        // var host = 'http://192.168.0.8:3000';

        /* web 용 */
        var host = '';

        var urls = {
            // rank page에서 필요한 정보 조회
            get_oneday_rank: host + '/common/oneday',
            get_oneweek_rank: host + '/common/oneweek',
            get_total_rank: host + '/common/total',

            // rank page에서 필요한 정보 조회
            get_profile: host + '/users/profile',
            get_report: host + '/users/report',
            login: host + '/users/signin',

            // profile page에서 필요한 정보 조회
            editProfile: host + '/users/profile/edit',
            changePassword: host + '/users/password/change'

        }

        return urls;
    });