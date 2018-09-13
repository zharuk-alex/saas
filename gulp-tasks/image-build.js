module.exports = function(gulp, plugins) {
  return function() {
    gulp.src('src/img/**/*')
    .pipe(plugins.cache(plugins.imagemin({
      interlaced: true,
      progressive: true,
      svgoPlugins: [
        {
          removeViewBox: false
        }
      ],
      use: [plugins.pngquant]
    })))
    .pipe(gulp.dest('dist/assets/img/'));
  }
}
