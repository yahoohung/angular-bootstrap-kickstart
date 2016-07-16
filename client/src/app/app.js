(function () {
  'use strict';

  angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
  });

  function config($stateProvider, $urlRouterProvider, $logProvider, $httpProvider, CONFIG) {

    $urlRouterProvider.otherwise('/');

    $logProvider.debugEnabled(true);

    $httpProvider.interceptors.push('httpInterceptor');

    $stateProvider
      .state('root', {
        views: {
          'header': {
            templateUrl: 'src/common/header.tpl.html',
            controller: 'HeaderCtrl'
          },
          'footer': {
            templateUrl: 'src/common/footer.tpl.html',
            controller: 'FooterCtrl'
          }
        }
      });

    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.post.Accept = 'application/json, text/javascript';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
    $httpProvider.defaults.headers.post['Access-Control-Max-Age'] = '1728000';
    $httpProvider.defaults.headers.common['Access-Control-Max-Age'] = '1728000';
    $httpProvider.defaults.headers.common.Accept = 'application/json, text/javascript';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
    $httpProvider.defaults.useXDomain = true;

  }

  function MainCtrl($log, $scope) {
    $log.debug('MainCtrl loaded!');

    $scope.snippet = {
      header: true,
      sidebar: true,
      content: true,
      footer: true
    };

  }

  function run($log, $rootScope, $state) {
    $log.debug('App is running!');

    $rootScope.$state = $state;

    // hook

    $rootScope.$on('$stateChangeStart', function () {
      $log.debug('$stateChangeStart');
    });

    $rootScope.$on('$locationChangeStart', function () {
      $log.debug('$locationChangeStart!');

    });

    $rootScope.$on('routeChangeStart', function(){

    });

    $rootScope.$on('$routeChangeSuccess', function () {
      $log.debug('$routeChangeSuccess');

    });

    $rootScope.$on('$routeChangeError', function () {
      $log.debug('$routeChangeError');
    });
  }

  angular.module('app', [
      'ui.bootstrap',
      'app.config',
      'ui.router',
      'home',
      'about',
      'common.header',
      'common.footer',
      'common.interceptors.http',
      'templates'
    ])
    .config(config)
    .run(run)
    .controller('MainCtrl', MainCtrl)
    .value('version', '1.0.0');
})();
