module.exports = function(gulp, plugins) {
  return function() {
    gulp.src('src/img/clients_logo/*.png')
        .pipe(plugins.resizer({
            format: "png",
            height: "60px"
        }))
    .pipe(gulp.dest('dist/assets/img/clients_logo/'));
  }
}
