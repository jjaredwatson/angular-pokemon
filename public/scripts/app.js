angular
  .module('rolo-mon', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/pokemons',
      controllerAs: 'pokemonsIndexCtrl',
      controller: 'PokemonsIndexController'
    })
    .when('/albums/:id', {
      templateUrl: '/templates/pokemons-show',
      controllerAs: 'pokemonsCtrl',
      controller: 'PokemonsController'
    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}

https://super-crud.herokuapp.com/pokemon
