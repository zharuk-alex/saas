module.exports = function (gulp, plugins) {
  return function () {
    gulp.src("src/templates/*.mustache")
    .pipe(plugins.mustache('dist/data.json',{extension: '.html'},{}))
    .pipe(gulp.dest("dist/"));
  }
};
