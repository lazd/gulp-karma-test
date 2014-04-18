module.exports = function(config) {
  config.set({
    basePath: './',

    frameworks: ['jasmine'],

    files: require('./manifest.json').concat(['test/client/**/*.js']),

    exclude: [],

    reporters: ['dots'],

    preprocessors: {
      'client/scripts/**/*.js': 'coverage'
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: process.env.TRAVIS ? [ 'Firefox' ] : [
      'Chrome',
      'Firefox'
    ],

    captureTimeout: 20000,

    singleRun: false,

    reportSlowerThan: 500
  });
};