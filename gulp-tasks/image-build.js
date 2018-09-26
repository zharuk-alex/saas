module.exports = function(gulp, plugins) {
  return function() {
    gulp.src('src/img/**/*')
    .pipe(plugins.cache(plugins.imagemin({
      interlaced: true,
      progressive: true,
      svgoPlugins: [
        {
          removeViewBox: true
        }
      ],
      optimizationLevel: 3,
      use: [plugins.pngquant]
    })))
    .pipe(gulp.dest('dist/assets/img/'));
  }
}
