var autoprefixer = require('gulp-autoprefixer');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync');
var buffer = require('vinyl-buffer');
var cache = require('gulp-cache');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var cssnano = require('gulp-cssnano');
var clean = require('gulp-clean');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var jpegtran = require('imagemin-jpegtran');
var log = require('gulplog');
var notify = require("gulp-notify");
var plumber = require('gulp-plumber');
var pngquant = require('imagemin-pngquant')();
var reload = browserSync.reload;
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var mustache = require("gulp-mustache");



var plugins = require('gulp-load-plugins')({
  pattern: '*'
});


function getTask(task) {
    return require('./gulp-tasks/' + task)(gulp, plugins);
}

gulp.task('browser-sync', getTask('browser-sync'));
gulp.task('scripts', getTask('scripts'));
gulp.task('sass', getTask('sass'));
gulp.task('image', getTask('image'));
gulp.task('clean-html', getTask('clean-html'));
gulp.task('mustache',['clean-html'], getTask('mustache'));
gulp.task('libs', getTask('libs'));

gulp.task('html', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist/'));
});



gulp.task('watch', ['clean-html','sass', 'scripts', 'libs', 'mustache', 'browser-sync'], function() {
	gulp.watch('src/scss/**/*.scss', ['sass']);
	gulp.watch('src/js/**/*.js', ['scripts']);
  // gulp.watch('src/templates/**/*.mustache', ['mustache'], reload);
  gulp.watch('src/templates/**/*.mustache', ['mustache']);
	// gulp.watch('src/**/*.html', ['html'], reload);
});

gulp.task('default', ['watch']);
