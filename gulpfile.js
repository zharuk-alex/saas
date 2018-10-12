var cheerio = require('gulp-cheerio');
var replace = require('gulp-replace');
var svgmin = require('gulp-svgmin');
var autoprefixer = require('gulp-autoprefixer');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync');
var buffer = require('vinyl-buffer');
var cache = require('gulp-cache');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var cssnano = require('gulp-cssnano');
var decomment = require('gulp-decomment');
var fs = require('fs');
var gulp = require('gulp');
var stripDebug = require('gulp-strip-debug'); // Strip console, alert, and debugger statements from JavaScript code
var gulpIf = require('gulp-if');
var gulpSequence = require('gulp-sequence');
var runSequence = require('run-sequence');
var seo = require('gulp-seo');
var i18nJsonTools = require('gulp-i18n-json-tools');
var imagemin = require('gulp-imagemin');
var jpegtran = require('imagemin-jpegtran');
var jsonConcat = require('gulp-json-concat');
var log = require('gulplog');
var mustache = require("gulp-mustache");
var notify = require("gulp-notify");
var plumber = require('gulp-plumber');
var pngquant = require('imagemin-pngquant')();
var prettyHtml = require('gulp-pretty-html');
var reload = browserSync.reload;
var rename = require('gulp-rename');
var resizer = require('gulp-images-resizer');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var spritesmith = require('gulp.spritesmith');
// var strip = require('gulp-strip-comments');
var svgSprite = require('gulp-svg-sprite');
var uglify = require('gulp-uglify');

// var plugins = require('gulp-load-plugins')();
var plugins = require('gulp-load-plugins')({
  camelize: true,
  pattern: '*',
  // scope: ['devDependencies'],
  // pattern: ['gulp-*', 'gulp.*'],
  // replaceString: /\bgulp[\-.]/,
  lazy: true
});

var params = {
  dirs: {
    build: "build",
    src: 'src',
    dist: 'dist'
  },
  locales: ['ru', 'en', 'ua']
}
function getTask(task, params) {
  return require('./gulp-tasks/' + task)(gulp, plugins, params);
}

gulp.task('browser-sync', getTask('browser-sync'));

gulp.task('db-locales', function(callback) {
  var tasks = [];
  params
    .locales
    .map(function(locale) {
      var data = {
        dir: params.dirs.build,
        locale: locale
      }
      tasks.push('db-json-' + locale);
      return gulp.task('db-json-' + locale, getTask('db-json', data));
    });
  runSequence(tasks, callback);
});

gulp.task('mustache', function(callback) {
  var tasks = [];
  params
    .locales
    .map(function(locale) {
      var data = {
        dir: params.dirs.dist,
        locale: locale
      }
      tasks.push('template-' + locale);
      return gulp.task('template-' + locale, getTask('mustache', data));
    });
  runSequence('db-locales', tasks, callback);
});

gulp.task('mustache:build', function(callback) {
  var tasks = [];
  params.locales.map(function(locale) {
      var data = {
        dir: params.dirs.build,
        locale: locale
      }
      tasks.push('template-' + locale + ':build');
      return gulp.task('template-' + locale + ':build', getTask('mustache', data));
    });
  runSequence('db-locales', tasks, callback);
});
//
params.locales.map(function(locale) {
    return gulp.task('compile:json-' + locale, function(callback) {
      runSequence('db-json-' + locale, 'template-' + locale, callback);
    })
  })

gulp.task('sass', getTask('sass', params.dirs.dist));
gulp.task('sass:build', getTask('sass', params.dirs.build));
gulp.task('sass-libs', getTask('sass-libs', params.dirs.dist));
gulp.task('sass-libs:build', getTask('sass-libs', params.dirs.build));
gulp.task('js-libs', getTask('js-libs', params.dirs.dist));
gulp.task('js-libs:build', getTask('js-libs', params.dirs.build));
gulp.task('scripts', getTask('scripts', params.dirs.dist));
gulp.task('scripts:build', getTask('scripts', params.dirs.build));
gulp.task('svg-sprites', getTask('svg-sprites', params.dirs.dist));
gulp.task('svg-sprites:build', getTask('svg-sprites', params.dirs.build));

gulp.task('svg-sass-include', function(callback) {
  runSequence('svg-sprites', ['sass'], callback)
});
gulp.task('svg-sass-include:build', function(callback) {
  runSequence('svg-sprites:build', ['sass:build'], callback)
});

gulp.task('fonts', function(callback) {
  return gulp
    .src('src/font/**/*')
    .pipe(gulp.dest('dist/assets/font'));
});

gulp.task('fonts:build', function(callback) {
  return gulp
    .src('src/font/**/*')
    .pipe(gulp.dest('build/assets/font'));
});

gulp.task('video-copy', function(callback) {
  return gulp
    .src('src/video/*')
    .pipe(gulp.dest('dist/assets/video'));
});

gulp.task('video-copy:build', function(callback) {
  return gulp
    .src('src/video/*')
    .pipe(gulp.dest('build/assets/video'));
});

gulp.task('php-copy', function(callback) {
  return gulp
    .src("src/php/**/*.php")
    .pipe(gulp.dest('dist/'));
});

gulp.task('php-copy:build', function(callback) {
  return gulp
    .src("src/php/**/*.php")
    .pipe(gulp.dest('build/'));
});

// WATCH
gulp.task('watch', [
  'svg-sass-include',
  'php-copy',
  'fonts',
  'sass-libs',
  'js-libs',
  'mustache',
  'scripts',
  'video-copy',
  'browser-sync'
], function() {
  gulp.watch('src/scss/**/*.scss', ['sass']);
  // watch json locale file then jsonConcat then mustache and reload
  params.locales.map(function(locale) {
    return gulp.watch('src/data/' + locale + '/*.json', ['compile:json-' + locale]);
  });
  //
  gulp.watch('src/templates/**/*.mustache', ['mustache'], reload);
  gulp.watch('src/js/**/*.js', ['scripts']);
  gulp.watch('src/php/**/*.php', ['php-copy'], reload);
  gulp.watch([
    'src/img/**/*.svg', '!src/img/sprites/sprites.svg'
  ], ['svg-sass-include'], reload);
});

gulp.task('default', ['watch']);
// Build
gulp.task('build', [
  'svg-sass-include:build',
  'sass-libs:build',
  'mustache:build',
  'sass-libs:build',
  'js-libs:build',
  "scripts:build",
  "php-copy:build",
  "video-copy:build",
  'fonts:build'
])
