angular.module('starter')

    .factory('UrlsFactory', function(){

        /* device 용 */
        // var host = 'http://52.78.5.104:8081';
        // var host = 'http://192.168.0.8:8081';

        /* web 용 */
        var host = '';

        var urls = {
            // rank-conroller
            get_oneday_rank: host + '/common/oneday',
            get_oneweek_rank: host + '/common/oneweek',
            get_total_rank: host + '/common/total'
        }

        return urls;
    });