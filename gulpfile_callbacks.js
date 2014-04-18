var gulp = require('gulp');
var karma = require('gulp-karma')({
  configFile: 'karma.conf.js'
});

// Add the tests to the include order
// Uses a glob to catch all tests
var testIncludeOrder = require('./manifest.json').concat(['test/client/*.js']);

// Run tests once
gulp.task('test', function(cb) {
  karma.once(cb, {
    reporters: ['dots', 'coverage']
  });
});

gulp.task('default', function() {
  // Start a server, then run tests
  karma.start().run();

  // Watch for changes and run accordingly
  gulp.watch(testIncludeOrder, function() {
    karma.run();
  });
});
