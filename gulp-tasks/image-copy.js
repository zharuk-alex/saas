module.exports = function(gulp, plugins) {
  return function() {
    gulp.src('src/img/**/*')
    .pipe(gulp.dest('dist/img/'));
  }
}
