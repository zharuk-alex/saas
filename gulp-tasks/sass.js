module.exports = function(gulp, plugins,dir) {
  var isDist = (dir == 'dist');
  var isBuild = (dir == 'build');
  return function(callback) {
    return gulp
      .src('src/scss/main.scss')
      .pipe(plugins.plumber({
        errorHandler: plugins
          .notify
          .onError("Error: <%= error.message %>")
      }))
      .pipe(plugins.if(isDist, plugins.sourcemaps.init()))
      .pipe(plugins.sass().on('error', plugins.sass.logError))
      .pipe(plugins.autoprefixer(['last 2 versions'], {
        cascade: true,
        grid: true
      }))
      .pipe(plugins.concat('style.min.css'))
      .pipe(plugins.if(isDist, plugins.sourcemaps.write('.')))
      .pipe(plugins.if(isBuild, plugins.cssnano()))
      .pipe(gulp.dest(dir+'/assets/css/'))
      .pipe(plugins.if(isDist, plugins.browserSync.reload({stream: true})));
  };
};
