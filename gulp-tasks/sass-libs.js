module.exports = function (gulp, plugins) {
    return function () {
        gulp.src('src/scss/libs.scss')
          .pipe(plugins.plumber({
            errorHandler: plugins.notify.onError("Error: <%= error.message %>"
          )}))
          // .pipe(plugins.sourcemaps.init())
          // .pipe(plugins.sass().on('error', sass.logError))
          .pipe(plugins.sass())
          .pipe(plugins.rename('libs.min.css'))
          .pipe(plugins.cssnano())
          // .pipe(plugins.sourcemaps.write('.'))
          .pipe(gulp.dest('dist/css/'))
          .pipe(plugins.browserSync.reload({ stream: true }))
          // .pipe(plugins.browserSync.stream());
    };
};
