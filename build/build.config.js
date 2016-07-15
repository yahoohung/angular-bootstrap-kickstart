'use strict';

//basic configuration object used by gulp tasks
module.exports = {
  port: 4000,
  uiPort: 4001,
  tmp: 'build/tmp',
  dist: 'build/dist',
  base: 'client',
  tpl: [
    'client/src/**/*.tpl.html',
    'client/src/common/*.tpl.html'
  ],
  mainLess: 'client/src/less/main.less',
  less: 'client/src/less/**/*.less',
  js: [
    'client/src/**/*.js',
    '!client/src/vendor/**/*.js',
    'client/test/unit/**/*.js'
  ],
  index: 'client/index.html',
  assets: 'client/assets/**',
  images: 'client/assets/images/**/*',
  banner: ['/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''
  ].join('')
};
