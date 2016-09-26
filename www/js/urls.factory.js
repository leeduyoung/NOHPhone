angular.module('starter')

    .factory('UrlsFactory', function(){

        /* device 용 */
        // var host = 'http://52.78.5.104:8081';
        // var host = 'http://192.168.0.8:8081';

        /* web 용 */
        var host = '';

        var urls = {
            // rank page에서 필요한 정보 조회
            get_oneday_rank: host + '/common/oneday',
            get_oneweek_rank: host + '/common/oneweek',
            get_total_rank: host + '/common/total',

            // profile page에서 필요한 정보 조회
            get_profile: host + '/users/profile',
            get_report: host + '/users/report'

        }

        return urls;
    });