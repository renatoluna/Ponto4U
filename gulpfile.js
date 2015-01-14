var gulp = require('gulp');
var karma = require('karma').server;

var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('scripts', function() {
    gulp.src([
        'src/scripts/libs/*.js',
        'src/scripts/app/utils.js',
        'src/scripts/app/clock.js',
        'src/scripts/app/pomodoro-trigger.js',
        'src/scripts/app/pomodoro-canvas.js'
    ])
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

gulp.task('test', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        browsers: ['PhantomJS'],
        singleRun: true
    }, done);
});

gulp.task('tdd', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        browsers: ['PhantomJS', 'Chrome']
    }, done);
});

gulp.task('build', ['scripts', 'styles', 'jade']);
gulp.task('dev', ['build', 'tdd']);
gulp.task('default', ['dev']);
gulp.task('dist', ['build', 'test']);
