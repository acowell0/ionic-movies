var movieServices = angular.module('movieServices', []);

movieServices.factory('movieList', ['$http', function($http){

    var urlBase = 'https://api.themoviedb.org/3/movie/popular?api_key=';
    var urlApiKey = '#################';
    var movieList = {};

    movieList.getMovies = function() {
        return $http.get(urlBase + urlApiKey);
    };

    return movieList;
}]);
