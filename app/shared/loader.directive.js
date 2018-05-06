var app=angular.module('onboardingApp');
app.directive('loading', function () {
    return {
        restrict: 'E',
        replace:true,
        template: '<div class="loading"><img class="loading-img" src="app/images/loader.gif"></div>',
        link: function (scope, element, attr) {
            scope.$watch('loading', function (val) {
                if (val)
                    $(element).show();
                else
                    $(element).hide();
            });
        }
    }
});