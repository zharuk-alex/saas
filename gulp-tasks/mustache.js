module.exports = function(gulp, plugins, data) {
  return function (callback) {
    let {dir, locale} = data;
    let isDist = (dir == 'dist');
    let isBuild = (dir == 'build');
    return gulp.src("src/templates/*.mustache")
    .pipe(plugins.mustache('temporary/data/locales/'+locale+'.json',{extension: '.html'},{}))
    .pipe(plugins.prettyHtml({
          indent_size: 2,
          indent_char: ' ',
          unformatted: ['code', 'pre', 'em', 'strong', 'span', 'i', 'b', 'br']
      }))
    .pipe(plugins.if(isBuild, plugins.decomment({trim: true})))
    .pipe(gulp.dest(dir+"/"+locale))
    .pipe(plugins.browserSync.reload({ stream: true }));
  }
};
