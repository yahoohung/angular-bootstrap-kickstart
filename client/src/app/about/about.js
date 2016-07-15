(function () {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.about', {
        url: '/about',
        views: {
          '@': {
            templateUrl: 'src/app/about/about.tpl.html',
            controller: 'AboutCtrl as about'
          }
        }
      });
  }



  /**
   * @name  about
   * @description Controller
   */
  function AboutCtrl($scope) {
    $scope.color = {
      red: Math.floor(Math.random() * 255),
      green: Math.floor(Math.random() * 255),
      blue: Math.floor(Math.random() * 255)
    };
    $scope.rating1 = 3;
    $scope.rating2 = 2;
    $scope.rating3 = 4;
    $scope.disabled1 = Math.floor(Math.random() * 100);
    $scope.disabled2 = 0;
    $scope.disabled3 = 70;
    $scope.invert = Math.floor(Math.random() * 100);
    $scope.isDisabled = true;

    $scope.vol = Math.floor(Math.random() * 100);
    $scope.bass = Math.floor(Math.random() * 100);
    $scope.master = Math.floor(Math.random() * 100);
  }

  angular.module('about', [])
    .config(config)
    .controller('AboutCtrl', AboutCtrl);
})();
