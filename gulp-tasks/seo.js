module.exports = function(gulp, plugins) {
  return function() {
    gulp.src('src/templates/partials/head.mustache')
    .pipe(plugins.seo({
      list: ['og', 'se', 'schema', 'twitter'],
      meta: {
          title: 'MMCS',
          description: 'Description website',
          author: 'MMCS',
          contact: 'office@LexMarketing.com.ua',
          keywords: ['мерчендайзинг', 'контроль', 'аудит', 'программа'],
          robots: {
              index: true, // true
              follow: true // true
          },
          revisitAfter: '5 month', // 3 month
          image: 'http://mywebsite.com/image.jpg',
          site_name: 'MMCS Website',
          type: 'website',
          copyright: 'LexMarketing',
          locale: 'ru',
          url: '',
          abstract: 'Small description of MMCS'

      }
  }))

  .pipe(gulp.dest('src/templates/partials/'));
  }
};
