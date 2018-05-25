var path = "..";
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var rename = require("gulp-rename");
var notify = require("gulp-notify");

gulp.task('pages', function() {
    gulp.src(['assets/html/*.html'])
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

gulp.task('style', function() {
    gulp.src(['assets/**/*.css', 'assets/scss/main.scss'])
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('script', function() {
    gulp.src(['assets/js/jquery.min.js', 'assets/js/*.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

gulp.task('images', function() {
    gulp.src(['assets/images/*.*'])
        .pipe(gulp.dest('dist/images'))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['pages', 'style', 'script', 'images'], function() {

    browserSync.init(null, {
        open: false,
        server: {
            baseDir: 'dist'
        },
        notify: false
    });

    gulp.watch('assets/scss/*.scss', ['style']);
    gulp.watch('assets/js/*.js', ['script']);
    gulp.watch('assets/html/*.html', ['pages']).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
