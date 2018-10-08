module.exports = function(gulp, plugins) {
  return function() {
    gulp.src("src/data/en/**/*.json")
      .pipe(plugins.jsonConcat('en.json',function(data){
        return new Buffer(JSON.stringify(data));
      }))
      .pipe(gulp.dest('src/data/locales/'));
  }

};
