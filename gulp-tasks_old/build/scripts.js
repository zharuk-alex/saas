module.exports = function (gulp, plugins) {
  return function (callback) {
    return gulp.src('src/js/**/*.js')
      .pipe(plugins.plumber({
        errorHandler: plugins.notify.onError("Error: <%= error.message %>")
      }))
      .pipe(plugins.concat('bundle.js'))
      .pipe(plugins.stripDebug())
      .pipe(plugins.uglify())
      .pipe(plugins.rename('bundle.min.js'))
      .pipe(plugins.decomment({trim: true}))
      .pipe(gulp.dest('build/assets/js/'));
  }
};
