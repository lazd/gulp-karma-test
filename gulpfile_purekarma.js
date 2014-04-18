var gulp = require('gulp');
var server = require('karma').server;
var runner = require('karma').runner;
var path = require('path');

// Run tests once
gulp.task('test', function(done) {
  server.start({
    configFile: path.join(__dirname, 'karma.conf.js'),
    singleRun: true
  }, function(exitCode) {
    console.log('Karma run has exited with ' + exitCode);
    done(exitCode);
    process.exit(exitCode);
  });
});

gulp.task('watch', function(done) {
  server.start({
    autoWatch: true,
    configFile: path.join(__dirname, 'karma.conf.js')
  }, function(exitCode) {
    console.log('Karma server has exited with ' + exitCode);
    done(exitCode);
    process.exit(exitCode);
  });
});

gulp.task('default', ['test']);
