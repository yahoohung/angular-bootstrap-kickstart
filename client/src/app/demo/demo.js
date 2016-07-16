(function () {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.demo', {
        url: '/demo',
        views: {
          '@': {
            templateUrl: 'src/app/demo/demo.tpl.html',
            controller: 'DemoCtrl as demo'
          }
        }
      });
  }



  /**
   * @name  demo
   * @description Controller
   */
  function DemoCtrl() {

  }

  angular.module('demo', [])
    .config(config)
    .controller('DemoCtrl', DemoCtrl);
})();
