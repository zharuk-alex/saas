module.exports = function(gulp, plugins) {
  return function() {
    gulp.src("src/data/ua/**/*.json")
      .pipe(plugins.jsonConcat('ua.json',function(data){
        return new Buffer(JSON.stringify(data));
      }))
      .pipe(gulp.dest('src/data/locales/'));
  }

};
