angular.module('starter.controllers', [])

    .controller('RankCtrl', function ($scope) {

        $scope.getRank = getRank;

        $scope.periodList = [
            { text: "하루", value: "one"},
            { text: "일주일", value: "week"},
            { text: "전체", value: "total"}
        ];

        $scope.data = {
            period: "하루"
        };

        function getRank(period) {
            console.log("getRank");
            console.log(period);
        }
    });
