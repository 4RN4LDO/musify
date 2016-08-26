(function() {
  'use strict';

  angular
    .module('app.event')
    .factory('eventService', eventService);

  /* @ngInject */
  function eventService($http, BASE_API, authService) {

    var service = {
      getEventByTypeId: getEventByTypeId
    };

    return service;

    function getEventByTypeId(presenterType) {
      var user = authService.getCurrentUser();
      return $http({
        url: BASE_API + 'events/' + presenterType + '?username=' + user.username + "&password=" + user.password,
        method: 'GET'
      });
    }

  }
})();
