module.exports = function (gulp, plugins, dir) {
  var isDist = (dir == 'dist');
  var isBuild = (dir == 'build');
    return function () {
        gulp.src('src/scss/libs.scss')
          .pipe(plugins.plumber({
            errorHandler: plugins.notify.onError("Error: <%= error.message %>"
          )}))
          .pipe(plugins.if(isDist, plugins.sourcemaps.init()))
          .pipe(plugins.sass())
          .pipe(plugins.rename('libs.min.css'))
          .pipe(plugins.if(isDist, plugins.sourcemaps.write('.')))
          .pipe(plugins.if(isBuild, plugins.cssnano()))
          .pipe(gulp.dest(dir+'/assets/css/'))
    };
};
