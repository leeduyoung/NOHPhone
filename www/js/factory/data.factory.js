angular.module('starter')
    .factory('DataFactory', function(){

        var loginedMember;

        return {
            getLoginedMember : function (){
                return loginedMember;
            },
            setLoginedMember : function(member){
                loginedMember = member;
            }
        }
    });