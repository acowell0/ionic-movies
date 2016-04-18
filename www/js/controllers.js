var movieControllers = angular.module('movieControllers', ['movieServices']);

movieControllers.controller('MovieListCtrl', ['$scope', 'movieList', function($scope, movieList) {

    console.log("movies = " + $scope.movies);
    if($scope.movies == null){
        getMovies();
    }

    function getMovies() {
      console.log("Calling factory to get movies...");
        movieList.getMovies()
            .then(function (response) {
                $scope.movies = response.data.results;
                console.log("Movies returned: " + $scope.movies.length);
            }, function (error) {
                console.log("Error occurred retrieving movie list from factory.");
            });
    }

    $scope.imageBaseUrl="http://image.tmdb.org/t/p/w185/";

}]);
