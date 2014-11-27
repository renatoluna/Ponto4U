var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var jade = require('gulp-jade');

gulp.task('pomodoro', function() {
  gulp.src(['src/scripts/libs/*.js', 'clock.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('pomodoro.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', function() {
    gulp.src('src/styles/*.css')
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('jade', function() {
    gulp.src('src/templates/*.jade')
    .pipe(gulpJade({
        jade: jade,
        pretty: true
    }))
    .pipe(gulp.dest('dist'));
});
