const gulp = require('gulp'),
      hjson = require('gulp-hjson'),
      imagemin = require('gulp-imagemin')
      rename = require('gulp-rename');

gulp.task('json', function() {
  gulp.src(['./src/**/*.hjson'])
    .pipe(hjson({ 
      to: 'json',
      jsonSpace: '  '
    }))
    .pipe(rename(function (path) {
       path.basename = `${path.dirname}-${path.basename}`;
       path.dirname = '';
    }))
    .pipe(gulp.dest('output/json/'));
});


gulp.task('images', function () {
  gulp.src('./src/**/visual-assets/**/*')
  .pipe(imagemin())
  .pipe(rename(function (path) {
    path.dirname = path.dirname.replace('/visual-assets','');
  }))
  .pipe(gulp.dest('output/images'));
});

gulp.task('default', ['json', 'images']);

