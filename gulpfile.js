var gulp = require('gulp');
var path = require('path');
var chug = require('gulp-chug');

var opts = {
  dist: 'dist/',
  mainJs: 'src/js/index.js',
  mainScss: 'src/scss/ligo-core/index.scss',
  remoteDestination: '/var/www/html/libs',
  webpack: {
    output: {
      filename: 'ligo.min.js',
      libraryTarget: "var",
      library: "Ligo"
    },
    resolve: {
      root: [
        path.resolve(__dirname, 'src/js'),
        path.resolve(__dirname, 'src/scss'),
        path.resolve(__dirname, 'node_modules')
      ]
    }
  }
};

require('./_base.gulpfile.js')(gulp, opts);

gulp.task('sync-all', function() {
  
  gulp.src('./examples/demo/gulpfile.js').pipe(chug({
     tasks: ['sync']
  }));

  gulp.src('./examples/tour/gulpfile.js').pipe(chug({
     tasks: ['sync']
  }));

  gulp.src('./examples/server/gulpfile.js').pipe(chug({
     tasks: ['sync']
  }));

  gulp.src('./docs/gulpfile.js').pipe(chug({
     tasks: ['sync']
  }));

  gulp.src('./gulpfile.js').pipe(chug({
     tasks: ['sync']
  }));
});