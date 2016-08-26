(function() {
  'use strict';

  angular
    .module('app.login')
    .factory('authService', authService);

  /* @ngInject */
  function authService($http, BASE_API) {

    var service = {
      currentUser: '',
      authenticate: authenticate,
      setCurrentUser: setCurrentUser,
      getCurrentUser: getCurrentUser
    };

    return service;

    function authenticate(user) {
      return $http({
        url: BASE_API + 'auth?username=' + user.username + "&password=" + user.password,
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
