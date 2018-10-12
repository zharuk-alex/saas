module.exports = function(gulp, plugins, data) {
  return function (callback) {
    let { dir, locale } = data;
    return gulp.src("src/templates/*.mustache")
    .pipe(plugins.mustache('src/data/locales/'+locale+'.json',{extension: '.html'},{}))
    .pipe(plugins.decomment({trim: true}))
    .pipe(plugins.prettyHtml({
          indent_size: 2,
          indent_char: ' ',
          unformatted: ['code', 'pre', 'em', 'strong', 'span', 'i', 'b', 'br']
      }))
    .pipe(gulp.dest(dir+"/"+locale))
    .pipe(plugins.browserSync.reload({ stream: true }));
  }
};
