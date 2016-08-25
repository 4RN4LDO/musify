(function() {
  'use strict';

  angular
    .module('app.login')
    .controller('LoginCtrl', LoginCtrl);

  /* @ngInject */
  function LoginCtrl(authService, $state, $ionicPopup) {

    var vm = this;
    vm.authenticate = authenticate;

    activate();

    function activate() {
      vm.user = {};
    }

    function authenticate() {
      authService.authenticate(vm.user)
        .then(handleLoginSuccess)
        .catch(handleLoginError);
    }

    function handleLoginSuccess(response) {
      if (response.data === 'true') {
        authService.setCurrentUser(vm.user);
        $state.go('mainMenu');
      }else {
        showAuthErrorPopup();
      }
    }

    function handleLoginError(response) {
      showAuthErrorPopup();
    }

    function showAuthErrorPopup() {
     var alertPopup = $ionicPopup.alert({
       title: 'Error de autenticación',
       template: 'Usuario o contraseña incorrectos'
     });
    }

  }
})();
