module.exports = function (gulp, plugins) {
  return function () {
    gulp.src("src/templates/*.mustache")
    .pipe(plugins.mustache('src/db.json',{extension: '.html'},{}))
    .pipe(gulp.dest("dist/"))
    .pipe(plugins.browserSync.reload({ stream: true }));
  }
};
