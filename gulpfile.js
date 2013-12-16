var gulp = require('gulp');
var karma = require('../gulp-karma/index.js');
var es = require('event-stream');

gulp.task('test', function() {
  return karma({
    configFile: 'karma.conf.js',
    singleRun: true
  });
});

// default task gets called when you run the `gulp` command
gulp.task('default', function() {
  // Start the Karma server
  return karma({
    configFile: 'karma.conf.js',
    background: true,
    autoWatch: true
  });
});
