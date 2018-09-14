var autoprefixer = require('gulp-autoprefixer');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync');
var buffer = require('vinyl-buffer');
var cache = require('gulp-cache');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var cssnano = require('gulp-cssnano');
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
var reload = browserSync.reload;
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

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
gulp.task('clean-html', getTask('clean-html'));
gulp.task('db-json', getTask('db-json'));
gulp.task('mustache', ['clean-html','db-json'], getTask('mustache'));
// gulp.task('html', getTask('html'));



gulp.task('create-dist', function() {
  if(!fs.existsSync('./dist'))
    fs.mkdirSync('./dist')
});

gulp.task('video-copy', function() {
  return gulp.src('src/video/**/*')
  .pipe(gulp.dest('dist/assets/video/'));
});

gulp.task('watch', ['sass', 'scripts', 'mustache', 'browser-sync'], function() {
	gulp.watch('src/img/**/*.*', ['image-copy']);
	gulp.watch('src/scss/**/*.scss', ['sass']);
	gulp.watch('src/js/**/*.js', ['scripts']);
	gulp.watch('src/data/**/*.json', ['mustache']);
  gulp.watch('src/templates/**/*.mustache', ['mustache']);
});
gulp.task('once',['create-dist','db-json','fonts','sass-libs','js-libs','video-copy','image-build'])
gulp.task('default', ['watch']);
