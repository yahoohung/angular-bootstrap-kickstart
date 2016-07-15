(function() {
  'use strict';

  function headerCtrl($log, $scope, $state) {
    $log.debug('Header loaded');
    $scope.currentNavItem = $state.current.name;
    console.log($state.current.name);
  }

  angular.module('common.header', [])
    .controller('HeaderCtrl', headerCtrl);
})();
