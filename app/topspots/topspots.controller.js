angular
  .module('tsApp')
  .controller('HomeController', HomeController);

  function HomeController($http){
    var vm = this;

    $http.get('http://localhost:50878/api/topspots')
      .then(function(response){
        vm.info = response.data;

    });


  }
