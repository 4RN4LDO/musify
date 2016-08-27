(function() {
  'use strict';

  angular
    .module('app.client')
    .factory('clientService', clientService);

  /* @ngInject */
  function clientService($http, BASE_API, authService) {

    var service = {
      getEventByClientId: getEventByClientId
    };

    return service;

    function getEventByClientId(clientId) {
      var user = authService.getCurrentUser();
      return $http({
        url: BASE_API + 'clients/' + clientId + '?username=' + user.username + "&password=" + user.password,
        method: 'GET'
      });
    }

  }
})();