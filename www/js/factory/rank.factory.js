angular.module('starter')

    .factory('RankFactory', function($http, UrlsFactory) {
        
        // 하루 순위 조회
        function getOneDayRank() {
            return $http({
                method: 'GET',
                url: UrlsFactory.get_oneday_rank
            }); 
        }

        // 일주일 순위 조회
        function getOneWeekRank() {
            console.log("test");
            console.log(UrlsFactory.get_oneweek_rank);
            return $http({
                method: 'GET',
                url: UrlsFactory.get_oneweek_rank
            });
        }

        // 전체 순위 조회
        function getTotalRank() {
            return $http({
                method: 'GET',
                url: UrlsFactory.get_total_rank
            });
        }

        return {
            getOneDayRank : getOneDayRank,
            getOneWeekRank : getOneWeekRank,
            getTotalRank : getTotalRank
        }
    });