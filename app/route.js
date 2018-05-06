
    angular.module('onboardingApp').config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
    function ($stateProvider, $locationProvider, $urlRouterProvider) {
        'use strict';
        $locationProvider.html5Mode(false);
        // default route
        $urlRouterProvider.otherwise('/page/login');

        // Application Routes
        $stateProvider
            // Single Page Routes
            .state('page', {
                url: '/page',
                templateUrl: './app/component/pages/page.html',
                controller: 'PageController'
            })
            .state('page.login',{
                url: '/login',
                templateUrl: './app/component/pages/login/login.html',
                controller: 'LoginController',
                title: 'login'
            })
             .state('page.signup',{
                url: '/signup',
                templateUrl: './app/component/pages/signup/signup.html',
                controller: 'SignupController',
                title: 'signup'
            })
            .state('app',{
                url: '/app',
                templateUrl: "./app/component/app/app.html",
                controller: 'AppController'
            })
            .state('app.usersListing',{
                url: '/userlisting',
                templateUrl: './app/component/app/user-listing/user-listing.html',
                controller: 'userListingController',
                title: 'users'
           })

    }]);