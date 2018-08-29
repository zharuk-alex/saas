module.exports = function (gulp, plugins) {
  return function () {
    gulp.src('dist/*.html', {read: false})
        .pipe(plugins.clean());
  }
};
