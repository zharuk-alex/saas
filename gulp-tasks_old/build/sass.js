module.exports = function(gulp, plugins) {
  return function() {
    gulp
      .src('src/scss/main.scss')
      .pipe(plugins.plumber({
        errorHandler: plugins
          .notify
          .onError("Error: <%= error.message %>")
      }))
      .pipe(plugins.sass().on('error', plugins.sass.logError))
      .pipe(plugins.autoprefixer(['last 2 versions'], {
        cascade: true,
        grid: true
      }))
      .pipe(plugins.concat('style.min.css'))
      .pipe(plugins.cssnano())
      .pipe(gulp.dest('build/assets/css/'))
  };
};
