(function () {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.blank', {
        url: '/blank',
        views: {
          '@': {
            templateUrl: 'src/app/blank/blank.tpl.html',
            controller: 'BlankCtrl as blank'
          }
        }
      });
  }



  /**
   * @name  blank
   * @description Controller
   */
  function BlankCtrl($scope) {

  }

  angular.module('blank', [])
    .config(config)
    .controller('BlankCtrl', BlankCtrl);
})();
