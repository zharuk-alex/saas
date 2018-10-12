module.exports = function (gulp, plugins, dir) {
  return function (callback) {
    gulp.src(dir+'/**/*.*', {read: false})
        .pipe(plugins.clean());
  }
};
