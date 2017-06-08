angular
  .module('rolo-mon')
  .controller('PokemonsIndexController', PokemonsIndexController);

PokemonsIndexController.$inject = ['$http'];

function PokemonsIndexController ($http) {
  var vm = this;
  vm.newPokemon = {};


  $http({
    method: 'GET',
    url: 'super-crud.herokuapp.com/pokemon'
  }).then(function successCallback(response) {
    vm.pokemons = response.data;
    console.log(vm.pokemons);
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  // vm.createAlbum = function () {
  //   $http({
  //     method: 'POST',
  //     url: '/api/albums',
  //     data: vm.newAlbum,
  //   }).then(function successCallback(response) {
  //     vm.albums.push(response.data);
  //   }, function errorCallback(response) {
  //     console.log('There was an error posting the data', response);
  //   });
  // }
  //
  // vm.editAlbum = function (album) {
  //   $http({
  //     method: 'PUT',
  //     url: '/api/albums/'+album._id,
  //     data: album
  //   }).then(function successCallback(json) {
  //     // don't need to do anything!
  //   }, function errorCallback(response) {
  //     console.log('There was an error editing the data', response);
  //   });
  // }
  //
  // vm.deleteAlbum = function (album) {
  //   $http({
  //     method: 'DELETE',
  //     url: '/api/albums/'+ album._id
  //   }).then(function successCallback(json) {
  //     var index = vm.albums.indexOf(album);
  //     vm.albums.splice(index,1)
  //   }, function errorCallback(response) {
  //     console.log('There was an error deleting the data', response);
  //   });
  // }

}
