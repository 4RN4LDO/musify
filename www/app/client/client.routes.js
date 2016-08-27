(function() {
  'use strict';

  angular
    .module('app.client')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('client', {
        url: '/client',
        templateUrl: 'app/client/client.html',
        controller: 'ClientCtrl as vm'
      });

  }

})();
