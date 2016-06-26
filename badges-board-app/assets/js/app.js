var socketApp = angular.module('socketApp',[]);

socketApp.controller('BadgeController',['$http','$log','$scope',function($http,$log,$scope){


    $scope.predicate = '-id';
    $scope.reverse = false;
    $scope.baseUrl = 'http://localhost:1337';
    $scope.badgeList =[];
    $scope.getAllMessages = function(){

        io.socket.get('/badge/');

        $http.get($scope.baseUrl+'/badge/')
             .success(function(success_data){
                     $scope.badgeList = success_data;
                     $log.info(success_data);
             });
    };

    $scope.getAllMessages();
    $scope.badgeUser = "Anonymous"
    $scope.badgeMessage="";
    $scope.badgeBadge="";

    io.socket.on('badge',function(obj){

        if(obj.verb === 'created'){
            $log.info(obj)
            $scope.badgeList.push(obj.data);
            $scope.$digest();
        }

    });

    $scope.sendMsg = function(){
        $log.info($scope.badgeMessage);
        io.socket.post('/badge/',{user:$scope.badgeUser,badge:$scope.badgeBadge,message: $scope.badgeMessage});
        $scope.badgeMessage = "";
        $scope.badgeBadge = "";
    };
}]);
