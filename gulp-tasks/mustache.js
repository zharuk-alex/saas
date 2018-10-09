var fs = require('fs');
const locales = ['en', 'ru', 'ua'];

function localesMustache(gulp, plugins, locale) {
  return gulp.src("src/templates/*.mustache")
  .pipe(plugins.mustache('src/data/locales/'+locale+'.json',{extension: '.html'},{}))
  .pipe(plugins.decomment({trim: true}))
  .pipe(plugins.prettyHtml({
        indent_size: 2,
        indent_char: ' ',
        unformatted: ['code', 'pre', 'em', 'strong', 'span', 'i', 'b', 'br']
    }))
  .pipe(gulp.dest("dist/"+locale));
}

module.exports = function (gulp, plugins) {
  return function () {
    return locales.map(function (locale) {
      return localesMustache(gulp, plugins, locale);
    });
  }
};
