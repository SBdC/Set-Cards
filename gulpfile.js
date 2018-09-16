var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
// Require browserSync
var browserSync = require('browser-sync').create();



gulp.task('hello', function() {
  console.log('Hello Zell');
});

gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});



gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
  gulp.watch('app/css/**/*.css', browserSync.reload);
});



gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('default', [ 'browserSync', 'watch']);
