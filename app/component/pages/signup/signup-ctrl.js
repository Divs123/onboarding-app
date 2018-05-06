var app=angular.module('onboardingApp');
app.controller('SignupController',function($scope,$http,$state){
    $scope.signupForm={};
    
    //*=========================== Function to submit signup form =====================*//
    $scope.submitSignupForm=function(){
        $http({
            url:'https://reqres.in/api/ login', 
            method:'POST',
            data:{
                email: $scope.signupForm.email,
                password: $scope.signupForm.password
            }
        }).then(function(response){
            if(response.status==200){
                toastr.success("Registered successfully");
                $state.go("app.usersListing");
            }
        },function(response){      
            if(response.status==400){
                toastr.error(response.data.error);
            }
            
        });
    }

});