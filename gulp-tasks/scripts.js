module.exports = function (gulp, plugins, dir) {
  var isDist = (dir == 'dist');
  var isBuild = (dir == 'build');
  return function (callback) {
    var smaps = plugins.sourcemaps;
    gulp.src('src/js/**/*.js')
      .pipe(plugins.plumber({
        errorHandler: plugins.notify.onError("Error: <%= error.message %>")
      }))
      .pipe(plugins.if(isDist, plugins.sourcemaps.init()))
      .pipe(plugins.concat('bundle.js'))

      // .pipe(plugins.browserify({
      //   insertGlobals : true,
      //   debug: true
      // }))
      .pipe(plugins.if(isBuild, plugins.uglify()))
      .pipe(plugins.rename('bundle.min.js'))
      .pipe(plugins.if(isDist, plugins.sourcemaps.write('.')))
      .pipe(plugins.if(isBuild, plugins.decomment({trim: true})))
      .pipe(gulp.dest(dir+'/assets/js/'))
      .pipe(plugins.browserSync.reload({ stream: true }))
  }
};
