var app=angular.module('onboardingApp');
app.controller('LoginController',function($scope,$http,$state){
    $scope.loginForm={};

    //*=========================== Function to submit login form =====================*//
    $scope.submitLoginForm=function(){
        $scope.loading=true;
        $http({
            url:'https://reqres.in/api/login',
            method:'POST',
            data:{
                email: $scope.loginForm.email,
                password: $scope.loginForm.password
            }
        }).then(function(response){   
            $scope.loading=false;
            if(response.status==200){
                var access_token=response.data.token;
                localStorage.setItem('access_token',access_token);
                toastr.success("Logged in successfully");   
                $state.go("app.usersListing");
            }
        },function(response){
            if(response.status==400){
                toastr.error(response.data.error);
            }            
        });
    }

});