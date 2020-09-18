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
    
    $urlRouterProvider.otherwise('/container/home');
    
});

