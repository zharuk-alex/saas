module.exports = function(gulp, plugins) {
  return function() {
      gulp.src('src/font/**/*')
        .pipe(gulp.dest('dist/assets/font/'));
  }
};
