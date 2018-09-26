module.exports = function (gulp, plugins) {
  return function () {
    gulp.src('src/js/**/*.js')
      .pipe(plugins.plumber({
        errorHandler: plugins.notify.onError("Error: <%= error.message %>")
      }))
      // .pipe(plugins.sourcemaps.init())
      .pipe(plugins.concat('bundle.js'))

      .pipe(plugins.browserify({
        insertGlobals : true,
        debug: true
      }))
      .pipe(plugins.uglify())
      .pipe(plugins.rename('bundle.min.js'))
      .pipe(plugins.decomment({trim: true}))
      // .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest('dist/assets/js/'))
      .pipe(plugins.browserSync.reload({ stream: true }))
  }
};
