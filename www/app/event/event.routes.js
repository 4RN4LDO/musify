(function() {
  'use strict';

  angular
    .module('app.event')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('event', {
        url: '/event',
        templateUrl: 'app/event/event.html',
        controller: 'EventCtrl as vm'
      });

  }

})();
