(function() {
  'use strict';

  angular
    .module('app.login')
    .factory('authService', authService);

  /* @ngInject */
  function authService($http) {

    var service = {
      currentUser: '',
      authenticate: authenticate
    };

    return service;

    function authenticate(user) {
      return $http({
        url: 'http://localhost:8080/v1/auth?username=' + user.username + "&password=" + user.password,
        method: 'GET'
      });
    }

    function setCurrentUser(user) {
      service.currentUser = user;
    }

    function getCurrentUser() {
      return service.currentUser;
    }

  }
})();
