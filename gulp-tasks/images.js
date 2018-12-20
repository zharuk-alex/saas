module.exports = function(gulp, plugins, dir) {
  var isDist = (dir == 'dist');
  var isBuild = (dir == 'build');
  return function() {
    gulp.src(['src/img/**/*.jpg','src/img/**/*.png', 'temporary/sprite/*.svg', 'src/img/intro_slider/*.svg'])
    .pipe(plugins.if(
        isBuild, plugins.cache(plugins.imagemin({
          interlaced: true,
          progressive: true,
          svgoPlugins: [
            {
              removeViewBox: true
            }
          ],
          optimizationLevel: 3,
          use: [plugins.pngquant]
        }))
      )
    )
    .pipe(gulp.dest(dir+'/assets/img/'));
  }
}
