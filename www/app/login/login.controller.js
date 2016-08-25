(function() {
  'use strict';

  angular
    .module('app.login')
    .controller('LoginCtrl', LoginCtrl);

  /* @ngInject */
  function LoginCtrl($http, $scope) {

    var vm = this;

    activate();

    function activate() {
      getAllClients()
      .then(function (response) {
        vm.instrument = response.data;
      })
    }

    function getAllClients () {
      return $http({
        url: 'http://localhost:8080/v2/instrument/1003',
        method: 'GET',
        data: {
          username: 'proyecto',
          password: 'root'
        }
      });
    }

  }
})();
