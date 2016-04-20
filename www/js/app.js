var movieApp = angular.module('movieApp', ['ionic', 'movieControllers', 'movieServices', 'ui.router']);

movieApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
          url:'/',
          templateUrl: 'templates/home.html'
      })
      .state('details', {
          url:'/details/{movie:json}',
          templateUrl: '/templates/details.html',
          controller: function($scope, $stateParams){
            $scope.movie = $stateParams.movie;
          }
      });

}]);
