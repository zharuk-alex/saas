const autoprefixer = require('gulp-autoprefixer');
const browserify = require('gulp-browserify');
const browserSync = require('browser-sync');
const buffer = require('vinyl-buffer');
const cache = require('gulp-cache');
const cheerio = require('gulp-cheerio');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const decomment = require('gulp-decomment');
const fs = require('fs');
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const imagemin = require('gulp-imagemin');
const jpegtran = require('imagemin-jpegtran');
const jsonConcat = require('gulp-json-concat');
const mustache = require("gulp-mustache");
const notify = require("gulp-notify");
const plumber = require('gulp-plumber');
const pngquant = require('imagemin-pngquant')();
const prettyHtml = require('gulp-pretty-html');
const reload = browserSync.reload;
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const resizer = require('gulp-images-resizer');
const runSequence = require('run-sequence');
const sass = require('gulp-sass');
const seo = require('gulp-seo');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');
const spritesmith = require('gulp.spritesmith');
const svgmin = require('gulp-svgmin');
const svgSprite = require('gulp-svg-sprite');
const uglify = require('gulp-uglify');
const del = require('del');

// const plugins = require('gulp-load-plugins')();
const plugins = require('gulp-load-plugins')({
  camelize: true,
  pattern: '*',
  // scope: ['devDependencies'],
  // pattern: ['gulp-*', 'gulp.*'],
  // replaceString: /\bgulp[\-.]/,
  lazy: true
});

const params = {
  dirs: {
    build: 'build',
    src: 'src',
    dist: 'dist',
    temp: 'temporary'
  },
  locales: ['ru', 'en', 'ua']
}

function getTask(task, params) {
  return require('./gulp-tasks/' + task)(gulp, plugins, params);
}

gulp.task('browser-sync', getTask('browser-sync'));

gulp.task('db-locales', function(callback) {
  const tasks = [];
  params
    .locales
    .map(function(locale) {
      const data = {
        dir: params.dirs.build,
        locale: locale
      }
      tasks.push('db-json-' + locale);
      return gulp.task('db-json-' + locale, getTask('db-json', data));
    });
  runSequence(tasks, callback);
});

gulp.task('mustache', function(callback) {
  const tasks = [];
  params
    .locales
    .map(function(locale) {
      const data = {
        dir: params.dirs.dist,
        locale: locale
      }
      tasks.push('template-' + locale);
      return gulp.task('template-' + locale, getTask('mustache', data));
    });
  runSequence('db-locales', tasks, callback);
});

gulp.task('mustache:build', function(callback) {
  const tasks = [];
  params.locales.map(function(locale) {
      const data = {
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

gulp.task('images', getTask('images', params.dirs.dist));
gulp.task('images:build', getTask('images', params.dirs.build));



gulp.task('clean', function() {
	return del.sync('dist/**'); // Удаляем папку dist перед сборкой
});

gulp.task('pre:watch', function(callback) {
  runSequence(['svg-sass-include',
  'fonts',
  'php-copy',
  'js-libs',
  'scripts',
  'sass-libs',
  'sass',
  'mustache',
  'video-copy'], 'images','browser-sync', callback);
});

// WATCH
gulp.task('watch', ['pre:watch'], function() {
  gulp.watch('src/scss/**/*.scss', ['sass'], reload);
  gulp.watch('src/templates/**/*.mustache', ['mustache']);
  gulp.watch('src/js/**/*.js', ['scripts'], reload);
  // watch json locale file then compile json then mustache and reload
  params.locales.map(function(locale) {
    return gulp.watch('src/data/' + locale + '/*.json', ['compile:json-' + locale]);
  });
  //
  // gulp.watch('src/php/**/*.php', ['php-copy'], reload);
  // gulp.watch([
  //   'src/img/**/*.svg', '!src/img/sprites/sprites.svg'
  // ], ['svg-sass-include'], reload);
});

gulp.task('default', ['watch']);
// Build
gulp.task('build', [
  'images:build',
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
