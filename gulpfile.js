var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('scripts', function() {
    gulp.src(['src/scripts/libs/*.js', 'src/scripts/app/clock.js', 'src/scripts/app/pomodoro-trigger.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('pomodoro.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', function() {
    gulp.src('src/styles/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(concat('main.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('jade', function() {
    gulp.src('src/templates/pages/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['scripts', 'styles', 'jade']);
