angular
  .module('tsApp')
  .controller('HomeController', HomeController);

  function HomeController($http){
    var vm = this;

    $http.get('https://raw.githubusercontent.com/OriginCodeAcademy/Cohort10/master/Projects/04-SanDiegoTopSpots/topspots.json').then(function(response){
      vm.info = response.data;

    });


  }
