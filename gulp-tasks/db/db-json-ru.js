module.exports = function(gulp, plugins) {
  return function() {
    gulp.src("src/data/ru/**/*.json")
      .pipe(plugins.jsonConcat('ru.json',function(data){
        return new Buffer(JSON.stringify(data));
      }))
      .pipe(gulp.dest('src/data/locales/'));
  }

};
