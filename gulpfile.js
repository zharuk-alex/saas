var	cheerio = require('gulp-cheerio');
var	replace = require('gulp-replace');
var	svgmin = require('gulp-svgmin');
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
var strip = require('gulp-strip-comments');
var svgSprite = require('gulp-svg-sprite');
var uglify = require('gulp-uglify');
var gulpMerge = require('gulp-merge');

var plugins = require('gulp-load-plugins')({
  pattern: '*'
});


function getTask(task) {
    return require('./gulp-tasks/' + task)(gulp, plugins);
}


gulp.task('browser-sync', getTask('browser-sync'));
gulp.task('fonts', getTask('fonts'));
gulp.task('scripts', getTask('scripts'));
gulp.task('sass', getTask('sass'));
gulp.task('sass-libs', getTask('sass-libs'));
gulp.task('js-libs', getTask('js-libs'));
gulp.task('image-build', getTask('image-build'));
gulp.task('image-copy', getTask('image-copy'));
gulp.task('svg-sprites', getTask('svg-sprites'));
gulp.task('clean-html', getTask('clean-html'));
gulp.task('db-json', getTask('db-json'));
gulp.task('mustache', ['clean-html','db-locales','mustache-eng','mustache-ru','mustache-ua']);
gulp.task('mustache-eng', getTask('mustache-eng'));
gulp.task('mustache-ru', getTask('mustache-ru'));
gulp.task('mustache-ua', getTask('mustache-ua'));

// gulp.task('html', getTask('html'));

gulp.task('db-json:ru', function () {
  return gulp.src("src/data/ru/**/*.json")
    .pipe(jsonConcat('ru.json',function(data){
      return new Buffer(JSON.stringify(data));
    }))
    .pipe(gulp.dest('src/locales/'));
});
gulp.task('db-json:eng', function () {
  return gulp.src("src/data/eng/**/*.json")
    .pipe(jsonConcat('eng.json',function(data){
      return new Buffer(JSON.stringify(data));
    }))
    .pipe(gulp.dest('src/locales/'));
});
gulp.task('db-json:ua', function () {
  return gulp.src("src/data/ua/**/*.json")
    .pipe(jsonConcat('ua.json',function(data){
      return new Buffer(JSON.stringify(data));
    }))
    .pipe(gulp.dest('src/locales/'));
});
gulp.task('db-locales', ['db-json:ua','db-json:ru','db-json:eng']);

var image_resize_dirs = [
  'src/img/clients_logo/*.*',
  'src/img/testimonials/*.*',
  'src/img/header-logos/*.*'
]

gulp.task('image-resize-clients_logo', function() {
    return gulp.src(['src/img/clients_logo/*.*'])
  	.pipe(resizer({
              format: "png",
              height: 60
          }))
  	.pipe(gulp.dest('dist/assets/img/clients_logo/'));
});
gulp.task('image-resize-testimonials', function() {
    return gulp.src(['src/img/testimonials/*.*'])
  	.pipe(resizer({
              format: "jpg",
              height: 160,
              width: 160
          }))
  	.pipe(gulp.dest('dist/assets/img/testimonials/'));
});
gulp.task('image-resize-header-logos', function() {
    return gulp.src(['src/img/header-logos/*.*'])
  	.pipe(resizer({
              height: 50
          }))
  	.pipe(gulp.dest('dist/assets/img/header-logos/'));
});

gulp.task('create-dist', function() {
  if(!fs.existsSync('./dist'))
    fs.mkdirSync('./dist')
});

gulp.task('video-copy', function() {
  return gulp.src('src/video/**/*')
  .pipe(gulp.dest('dist/assets/video/'));
});

gulp.task('image-resize',['image-resize-clients_logo','image-resize-testimonials','image-resize-header-logos']);



gulp.task('sprite:png', function () {
  var spriteData = gulp.src('src/img/**/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: '_sprite.scss'
  }));
  return spriteData.pipe(gulp.dest('src/sprite/test/'));
});

gulp.task('watch', ['sass', 'scripts', 'mustache', 'browser-sync'], function() {
	gulp.watch(['src/img/**/*.*'], ['image-copy','svg-sprites']);
	gulp.watch(image_resize_dirs, ['image-resize']);
	gulp.watch('src/scss/**/*.scss', ['sass']);
	gulp.watch('src/js/**/*.js', ['scripts']);
	gulp.watch('src/data/**/*.json', ['mustache']);
  gulp.watch('src/templates/**/*.mustache', ['mustache']);
});
gulp.task('once',['create-dist','db-locales','fonts','sass-libs','js-libs','video-copy','image-build', 'image-resize', 'svg-sprites'])
gulp.task('default', ['watch']);
