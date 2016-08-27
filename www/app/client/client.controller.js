(function() {
  'use strict';

  angular
    .module('app.client')
    .controller('ClientCtrl', ClientCtrl);

  /* @ngInject */
  function ClientCtrl(clientService, $ionicPopup) {

    var vm = this;
    vm.getEventByClient = getEventByClient;
    vm.executeGetEventClient = executeGetEventClient;
    vm.eventClientIsEmpty = eventClientIsEmpty;

    activate();

    function activate() {
      vm.client = {};
    }

    function getEventByClient(cliente) {
      clientService.getEventByClientId(cliente)
        .then(handleGetClientEventSuccess)
        .catch(handleGeClienttEventError)
    }

    function handleGetClientEventSuccess(response) {
      vm.client.date = Date.parse(response.data.date);
      vm.client.time = Date.parse(response.data.time);
      vm.client.place = response.data.place;
      vm.client.estatus = response.data.estatus;
    }

    function handleGeClienttEventError(response) {
      showErrorPopup();
    }

    function showErrorPopup() {
     var alertPopup = $ionicPopup.alert({
       title: 'Error',
       template: 'Usuario no autorizado'
     });
    }

    function executeGetEventClient() {
      getEventByClient(vm.cliente);
    }

    function eventClientIsEmpty() {
      return vm.client.hasOwnProperty("date");
    }
  }
})();
