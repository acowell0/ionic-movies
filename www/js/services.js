var movieServices = angular.module('movieServices', []);

movieServices.factory('movieList', ['$http', function($http){

    var urlBase = 'https://api.themoviedb.org/3/movie/popular?api_key=';
    var urlApiKey = 'a9b366d5e91b5c67304ef5c07a392b92';
    var movieList = {};

    movieList.getMovies = function() {
        return $http.get(urlBase + urlApiKey);
    };

    return movieList;
}]);
