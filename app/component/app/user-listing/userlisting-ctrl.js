var app = angular.module('onboardingApp');
app.controller('userListingController', function ($scope, $http, $state) {

    $scope.currentPage=1;

    //*=========================== Function to get user listing =====================*//
    $scope.getUsersListing = function (currentPage) {
        $scope.loading=true;
        $http({
            url: 'https://reqres.in/api/users?page=' + currentPage,
            method: 'GET'
        }).then(function (response) {
             $scope.loading=false;
            if (response.status == 200) {
                $scope.users = response.data.data;
                $scope.currentPage=response.data.page;
                $scope.per_page=response.data.per_page;
                $scope.total=response.data.total;
                $scope.total_pages=response.data.total_pages;
            }
        }, function (response) {
            if (response.status == 400) {
                toastr.error(response.data.error);
            }

        });
    }
    $scope.getUsersListing($scope.currentPage);


//*=========================== open File Dialog box =====================*//
    $scope.openFileDialog=function(){
        document.getElementById('file').click();
    }

//*===========================Function to upload file =====================*//
    $scope.file_to_upload = function (file) {
        $scope.uploaded_file = file[0];
        var fd=new FormData();
        fd.append('img',file[0]);
        fd.append('content_type',0);
        fd.append('max_the_size',420);

        $http({
            // url: 'https://api.pixhost.to/images?content_type=0&max_the_size=420&img='+ file[0] ,
        url: 'https://api.pixhost.to/images',
            method: 'POST',
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined},
            // headers: {
            //     'Content-Type': 'multipart/form-data; charset=utf-8',
            //     'Accept': 'application/json'
            // },
            data:fd
            // data: {
            //     img: file[0],
            //     content_type: 0,
            //     max_the_size: 420
            // }
        }).then(function (response) {
            console.log('success', response);
        }, function (response) {
            console.log('error', response);
        })
    }

//*=========================== Pagination Start =====================*//
 $scope.range = function () {
        if($scope.total_pages<5){
            var rangeSize = $scope.total_pages;
        }
        else{
            var rangeSize = 5;
        }
        var ret = [];
        var start;
        start = $scope.currentPage;
        if (start > $scope.total_pages - rangeSize) {
            start = $scope.total_pages - rangeSize + 1;
        }
        for (var i = start; i < start + rangeSize; i++) {
            ret.push(i);
        }
        return ret;
    };

//*=========================== Pagination Start =====================*//
    $scope.setCurrentPage=function(CP){
        $scope.currentPage=CP;
        $scope.getUsersListing($scope.currentPage); 
    }

    $scope.previousPage=function(){
        if($scope.currentPage>0){
            $scope.currentPage--;
            $scope.getUsersListing($scope.currentPage);
        }
    }
    $scope.nextPage=function(){
         if($scope.currentPage<$scope.total_pages){
            $scope.currentPage++;
            $scope.getUsersListing($scope.currentPage);
        }
    }   
    $scope.prevPageDisabled=function(){
         return $scope.currentPage === 1 ? "disabled" : "";
    }

    $scope.nextPageDisabled=function(){
        return $scope.currentPage === $scope.total_pages ? "disabled" : "";
    }
//*=========================== Pagination End =====================*//

});