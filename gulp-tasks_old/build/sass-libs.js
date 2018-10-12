module.exports = function(gulp, plugins) {
  return function() {
    gulp
      .src('src/scss/libs.scss')
      .pipe(plugins.plumber({
        errorHandler: plugins
          .notify
          .onError("Error: <%= error.message %>")
      }))
      .pipe(plugins.sass().on('error', plugins.sass.logError))
      .pipe(plugins.rename('libs.min.css'))
      .pipe(plugins.cssnano())
      .pipe(gulp.dest('build/assets/css/'))

  };
};
