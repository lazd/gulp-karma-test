var gulp = require('gulp');
var karma = require('../gulp-karma/index.js');

var includeOrder = [
  'client/scripts/todo/todo.js',
  'client/scripts/todo/todo.polyfills.js',
  'client/scripts/todo/todo.util.js',
  'client/scripts/todo/todo.App.js'
];

var testIncludeOrder = includeOrder.concat(['test/client/*.js']);

gulp.task('test', function() {
  return gulp.src(testIncludeOrder)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }));
});

gulp.task('default', function() {
  return gulp.src(testIncludeOrder)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }));
});
