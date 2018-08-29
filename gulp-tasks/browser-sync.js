module.exports = function(gulp, plugins) {
  return function() {
    plugins.browserSync.init({
        server: {
          baseDir: "./dist"
        },
        notify: true
      });
  };
};
