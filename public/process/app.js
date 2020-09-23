var app = angular.module('app', ['ui.router']);

app.run([ '$rootScope', '$state',
function ($rootScope, $state) {

}]);

app.config(function($stateProvider, $urlRouterProvider){

	$stateProvider
    .state('container', {
      url: '/container',
      views: {
        'main-content': {
          templateUrl: 'templates/container/index.html'
        },
      },
    })
    .state('container.home', {
      url: '/home',
      views: {
        'child-content@container': {
          templateUrl: 'templates/home/index.html'
        }
      },
    })
    .state('container.profile', {
      url: '/profile',
      views: {
        'child-content@container': {
          templateUrl: 'templates/profile/index.html'
        }
      },
    })
    .state('container.tasks', {
      url: '/tasks',
      views: {
        'child-content@container': {
          templateUrl: 'templates/tasks/index.html'
        }
      },
    })
    .state('container.mike',{
      url: '/mike',
      views:{
        'child-content@container':{
          templateUrl: 'templates/mike/index.html'
        }
      }
    })
    .state('container.users',{
      url: '/users',
      views:{
        'child-content@container':{
          templateUrl: 'templates/users/index.html'
        }
      }
    })
    .state('container.mikeExam',{
      url: '/mikeExam',
      views:{
        'child-content@container':{
          templateUrl: 'templates/mikeExam/index.html'
        }
      }
    })
    .state('container.transactions',{
      url: '/transactions',
      views:{
        'child-content@container':{
          templateUrl: 'templates/transactions/index.html'
        }
      }
    })
    .state('container.myTransaction',{
      url: '/myTransaction',
      views:{
        'child-content@container':{
          templateUrl: 'templates/myTransaction/index.html'
        }
      }
    })
    
    $urlRouterProvider.otherwise('/container/home');
    
});

