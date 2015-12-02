var app = angular.module('myApp', ['ngRoute']);

app.config(($routeProvider) => {
    $routeProvider
        .when('/', {
            templateUrl: 'view/view1.html',
            controller: 'SampleCtrl'
        })
        .when('/rireki', {
            templateUrl: 'view/view2.html'
        })
})
