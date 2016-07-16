'use strict';

var baseDir = '../client';

module.exports = function(config) {
  config.set({
    //This is the list of file patterns to load into the browser during testing.
    files: [
      baseDir + '/src/vendor/angular/angular.js',
      baseDir + '/src/vendor/angular-mocks/angular-mocks.js',
      baseDir + '/src/vendor/angular-animate/angular-animate.js',
      baseDir + '/src/vendor/angular-touch/angular-touch.js',
      baseDir + '/src/vendor/angular-bootstrap/ui-bootstrap.js',
      baseDir + '/src/vendor/angular-ui-router/release/angular-ui-router.js',
      baseDir + '/src/vendor/angular-resource/angular-resource.min.js',
      baseDir + '/src/vendor/angular-aria/angular-aria.min.js',
      baseDir + '/src/app/**/*.js',
      baseDir + '/src/common/**/*.js',
      '../build/tmp/templates.js',
      baseDir + '/test/unit/**/*.spec.js'
    ],

    frameworks: ['jasmine'],

    plugins: [
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-coverage',
      'karma-html-reporter',
      'karma-mocha-reporter'
    ],

    preprocessors: {
      '**/client/src/**/*.js': 'coverage'
    },

    reporters: ['mocha', 'html', 'coverage'],

    coverageReporter: {
      type: 'html',
      dir: baseDir + '/test/unit-results/coverage',
      file: 'coverage.html'
    },

    htmlReporter: {
      outputDir: baseDir + '//test/unit-results/html'
    },

    logLevel: 'info',

    urlRoot: '/__test/',

    //used browsers (overriding in some gulp task)
    browsers: ['PhantomJS'],

    browserNoActivityTimeout: 100000
  });
};

