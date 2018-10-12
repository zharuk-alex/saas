module.exports = function (gulp, plugins, dir) {
  return function (callback) {
	   return  gulp.src(['src/img/**/*.svg', '!src/img/sprite/sprite.svg'])
	// minify svg
		.pipe(plugins.svgmin({
			js2svg: {
				pretty: true
			}
		}))
		// remove all fill, style and stroke declarations in out shapes
		.pipe(plugins.cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: {xmlMode: true}
		}))
		// cheerio plugin create unnecessary string '&gt;', so replace it.
		.pipe(plugins.replace('&gt;', '>'))
		// build svg sprite
		.pipe(plugins.svgSprite({
			mode: {
				symbol: {
					sprite: "../sprite.svg",
					render: {
						scss: {
							dest:'../../../scss/_sprite-svg.scss',
							template: "src/scss/_sprite_template.scss"
						}
					}
				}
			}
		}))
		.pipe(gulp.dest('src/img/sprite/'))
		.pipe(gulp.dest(dir+'/assets/img/sprite/'))
    .pipe(plugins.browserSync.reload({stream: true}));
  }
}
