const locales = ['en', 'ru', 'ua'];

function localesData(gulp, plugins, locale) {
  return gulp.src("src/data/"+locale+"/**/*.json")
    .pipe(plugins.jsonConcat(locale+'.json',function(data){
      return new Buffer(JSON.stringify(data));
    }))
    .pipe(gulp.dest('src/data/locales/'));
}

module.exports = function(gulp, plugins) {
  return function () {
    return locales.map(function (locale) {
      return localesData(gulp, plugins, locale);
    })
  }
};
