module.exports = function(gulp, plugins) {
  return function() {
    plugins.browserSync.init({
        // server: {
        //   baseDir: "./dist"
        // },
        proxy: "localhost/saas/dist/",
        notify: true
      });
  };
};
