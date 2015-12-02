var app = angular.module('myApp', ['ui.router']);

app.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'view/view1.html',
            controller: 'SampleCtrl'
        })
        .state('rireki', {
            url: '/rireki',
            templateUrl: 'view/view2.html',
            controller: 'SampleCtrl2'
        })
})
