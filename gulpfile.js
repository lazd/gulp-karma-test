var gulp = require('gulp');

// Create a gulp+karma helper with a set of default options
// In the case, the options all come from the config file
var karma = require('gulp-karma')({
  configFile: 'karma.conf.js'
});

// Run tests once, for CI
gulp.task('test', function() {
  return karma.once({
    // CI-specific config here
    // reporters: ['coverage']
  });
});

gulp.task('gulp-watch', function() {
  // Start a server, then, once it's ready, run tests
  karma.start().then(karma.run);

  // Watch for changes with gulp and run tests accordingly
  gulp.watch(['client/scripts/todo/*.js', 'test/client/*.js'], function() {
    karma.run();
  });
});

gulp.task('karma-watch', function() {
  // Start a karma server, run tests, then watch with karma
  return karma.start({
    autoWatch: true
  });
});

gulp.task('default', ['test']);
