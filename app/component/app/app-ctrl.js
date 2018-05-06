var app=angular.module('onboardingApp');
app.controller('AppController',function($scope,$state,$rootScope){
    $scope.title=$state.current.title;
    // Find Current State Title
    $rootScope.pageTitle=function(){
        var title =$scope.title;
        return title;
    }

})