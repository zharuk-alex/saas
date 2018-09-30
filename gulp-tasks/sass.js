module.exports = function (gulp, plugins) {
    return function () {
        gulp.src('src/scss/main.scss')
          .pipe(plugins.plumber({
            errorHandler: plugins.notify.onError("Error: <%= error.message %>"
          )}))
          // .pipe(plugins.sourcemaps.init())
          // .pipe(plugins.sass().on('error', sass.logError))
          .pipe(plugins.sass().on('error', plugins.sass.logError))
          .pipe(plugins.autoprefixer(['last 2 versions'], {
            cascade: true,
            grid: true
          }))

          .pipe(plugins.concat('style.min.css'))

          .pipe(plugins.cssnano())
          // .pipe(plugins.sourcemaps.write('.'))
          .pipe(gulp.dest('dist/assets/css/'))
          .pipe(plugins.browserSync.reload({ stream: true }))
          // .pipe(plugins.browserSync.stream());
    };
};
