module.exports = function(gulp, plugins) {
  return function() {
    gulp.src(['src/img/**/*.*','!src/img/clients_logo/*.*','!src/img/header-logos/*.*','!src/img/testimonials/*.*'])
    .pipe(gulp.dest('dist/assets/img/'));
  }
}
