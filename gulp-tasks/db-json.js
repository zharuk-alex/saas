module.exports = function(gulp, plugins, data) {
  return function (callback) {
    let { dir, locale } = data;
    return gulp.src("src/data/"+locale+"/**/*.json")
      .pipe(plugins.jsonConcat(locale+'.json',function(data){
        return new Buffer(JSON.stringify(data));
      }))
      .pipe(gulp.dest('temporary/data/locales/'));
  }
};
