(function() {
  'use strict';

  angular
    .module('app.event')
    .controller('EventCtrl', EventCtrl);

  /* @ngInject */
  function EventCtrl(eventService, $ionicPopup) {

    var vm = this;
    vm.getEventByPresenter = getEventByPresenter;
    vm.executeGetEvent = executeGetEvent;
    vm.eventIsEmpty = eventIsEmpty;

    activate();

    function activate() {
      vm.event = {};
    }

    function getEventByPresenter(presenter) {
      eventService.getEventByTypeId(presenter)
        .then(handleGetEventSuccess)
        .catch(handleGetEventError)
    }

    function handleGetEventSuccess(response) {
      vm.event.date = Date.parse(response.data.date);
      vm.event.time = Date.parse(response.data.time);
      vm.event.place = response.data.place;
    }

    function handleGetEventError(response) {
      showErrorPopup();
    }

    function showErrorPopup() {
     var alertPopup = $ionicPopup.alert({
       title: 'Error',
       template: 'Usuario no autorizado'
     });
    }

    function executeGetEvent() {
      getEventByPresenter(vm.presenter);
    }

    function eventIsEmpty() {
      return vm.event.hasOwnProperty("date");
    }
  }
})();
