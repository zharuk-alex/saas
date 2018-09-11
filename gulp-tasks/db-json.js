module.exports = function(gulp, plugins) {
  return function() {
    gulp.src("src/data/**/*.json")
    .pipe(plugins.jsonConcat('db.json',function(data){
      return new Buffer(JSON.stringify(data));
    }))
    .pipe(gulp.dest("src/"));
  }
};
