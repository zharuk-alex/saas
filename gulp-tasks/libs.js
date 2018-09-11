var libs = {
  jquery: {
    js: 'node_modules/jquery/dist/jquery.js'
  },
  popper: {
    js: 'node_modules/popper.js/dist/umd/popper.js'
  },
  bootstrap: {
    // css: 'node_modules/bootstrap/dist/css/bootstrap.css',
    js: 'node_modules/bootstrap/dist/js/bootstrap.js'
  },
  // font_awesome: {
  //   css: 'node_modules/font-awesome/css/font-awesome.css',
  // },
  mdb: {
    // css: 'node_modules/mdbootstrap/css/mdb.css',
    js: 'node_modules/mdbootstrap/js/mdb.js'
  },
  mdb_modules_chart:{
    js: 'node_modules/mdbootstrap/js/modules/chart.js'
  },
  // mdb_addons_datatables:{
  //   // css: 'node_modules/mdbootstrap/css/addons/datatables.css',
  //   js: 'node_modules/mdbootstrap/js/addons/datatables.js'
  // },
  mdb_modules_enhanced_modals:{
    js: 'node_modules/mdbootstrap/js/modules/enhanced-modals.js'
  },
  mdb_modules_forms_free:{
    js: 'node_modules/mdbootstrap/js/modules/forms-free.js'
  },
  mdb_modules_jquery_easing:{
    js: 'node_modules/mdbootstrap/js/modules/jquery.easing.js'
  },
  mdb_modules_scrolling_navbar:{
    js: 'node_modules/mdbootstrap/js/modules/scrolling-navbar.js'
  },
  // mdb_modules_velocity:{
  //   js: 'node_modules/mdbootstrap/js/modules/velocity.min.js'
  // },
  mdb_modules_waves:{
    js: 'node_modules/mdbootstrap/js/modules/waves.js'
  },
  mdb_modules_wow:{
    js: 'node_modules/mdbootstrap/js/modules/wow.js'
  },
  jquery_counterup:{
    js: 'node_modules/jquery.counterup/jquery.counterup.js'
  },
  jquery_waypoints:{
    js: 'node_modules/waypoints/lib/jquery.waypoints.js'
  },
  owl_carousel:{
    // css: 'node_modules/owl.carousel/dist/assets/owl.carousel.css',
    js: 'node_modules/owl.carousel/dist/owl.carousel.js'
  },
  owl_carousel_theme:{
    // css: 'node_modules/owl.carousel/dist/assets/owl.theme.default.css'
  },
  parallax:{
    js: 'node_modules/jquery-parallax.js/parallax.js'
  }
};

var js_libs = Object.keys(libs).map(function(key, index) {
  return (libs[key].hasOwnProperty('js'))?libs[key].js:'';
},[]).concat(['src/libs/js/**/*.js']);

var css_libs = Object.keys(libs).map(function(key, index) {
  return (libs[key].hasOwnProperty('css'))?libs[key].css:'';
},[]).concat(['src/libs/css/**/*.css']);

module.exports = function(gulp, plugins) {
  return function() {
    gulp.src(css_libs)
      .pipe(plugins.concat('libs.css'))
      .pipe(plugins.cssnano())
      .pipe(plugins.rename({suffix: '.min'}))
      .pipe(gulp.dest('dist/css/'));

    gulp.src(js_libs)
      .pipe(plugins.uglify())
      .pipe(plugins.concat('libs.min.js'))
      .pipe(gulp.dest('dist/js/'));
  }
}
