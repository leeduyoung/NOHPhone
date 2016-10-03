angular.module('starter.controllers')

    .controller('RankCtrl', function ($scope, RankFactory) {

        // variable's
        $scope.rankList;

        // function's
        $scope.getRank = getRank;

        $scope.periodList = [
            { text: "하루", value: "one" },
            { text: "일주일", value: "week" },
            { text: "전체", value: "total" }
        ];

        $scope.data = {
            period: "하루"
        };

        $scope.$on("$ionicView.beforeEnter", function () {
            RankFactory.getOneDayRank().then(function success(response) {
                console.log(response.data);
                $scope.rankList = response.data;
            }, function error(error) {
                console.log(error);
            });
        });

        function getRank(period) {
            console.log("getRank");
            console.log(period);

            if (period == 'one') {
                RankFactory.getOneDayRank().then(function success(response) {
                    console.log(response.data);
                    $scope.rankList = response.data;
                }, function error(error) {
                    console.log(error);
                });
            }
            else if (period == 'week') {
                RankFactory.getOneWeekRank().then(function success(response) {
                    console.log(response.data);
                    $scope.rankList = response.data;
                }, function error(error) {
                    console.log(error);
                });
            }
            else {
                RankFactory.getTotalRank().then(function success(response) {
                    console.log(response.data);
                    $scope.rankList = response.data;
                }, function error(error) {
                    console.log(error);
                });
            }
        }
    });
