var app=angular.module('onboardingApp');
app.controller('PageController',function($scope,$state,$rootScope){
    $scope.title=$state.current.title;
    // Find Current State Title
    $rootScope.pageTitle=function(){
        var title =$scope.title;
        return title;
    }

    if(localStorage.getItem('access_token') && localStorage.getItem('access_token')!=null){
        $state.go('app.usersListing');
    }

})