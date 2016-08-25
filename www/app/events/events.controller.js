(function() {
  'use strict';

  angular
    .module('app.events')
    .controller('EventsCtrl', EventsCtrl);

  /* @ngInject */
  function EventsCtrl($http, $scope) {

    var vm = this;
    vm.events = [
      {"fecha": "12/03/2016", "hora":"21:50", "lugar":"Prueba", "genero": { "nombre": "Rock"}, "tipo": { "nombre":"adultos"}},
      {"fecha": "21/04/2016", "hora":"23:40", "lugar":"Prueba", "genero": { "nombre": "Pop"}, "tipo": { "nombre":"juvenil"}},
      {"fecha": "24/06/2016", "hora":"19:30", "lugar":"Prueba", "genero": { "nombre": "Tango"}, "tipo": { "nombre":"adultos"}},
      {"fecha": "12/08/2014", "hora":"20:00", "lugar":"Prueba", "genero": { "nombre": "HipHop"}, "tipo": { "nombre":"juvenil"}}
    ]

    activate();

    function activate() {
      getAllEvents()
      .then(function (response) {
        // Uncomment this lines when the endpoint in the server is ready.
        //vm.events = response.data;
      })
    }

    function getAllEvents(presenterId) {
      return $http({
        url: 'http://localhost:8080/v1/events/' + presenterId,
        method: 'GET',
        // Here we need to change this data for the current user.
        data: {
          username: 'proyecto',
          password: 'root'
        }
      });
    }

  }
})();
