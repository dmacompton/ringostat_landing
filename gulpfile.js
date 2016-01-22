"use strict"

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCss = require('gulp-minify-css'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
    livereload = require('gulp-livereload');

gulp.task('connect', function() {
    connect.server({
        root: 'builds/dist',
        livereload: true
    });
});

gulp.task('css', function() {
    gulp.src('builds/development/scss/style.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 15 versions'))
        .pipe(concat('main.css'))
        .pipe(minifyCss())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('builds/dist/'))
        .pipe(connect.reload());
});

gulp.task('js', function() {
    gulp.src([
        'builds/development/js/jquery-1.10.2.min.js',
        'builds/development/js/jquery.smooth-scroll.min.js',
        'builds/development/js/bootstrap.min.js',
        'builds/development/js/modernizr.js',
        'builds/development/js/device.js',
        //'builds/development/js/jqeury.waypoints.js',
        'builds/development/js/script.js'
    ])
        .pipe(uglify())
        .pipe(concat('script.min.js'))
        .pipe(gulp.dest('builds/dist/'))
});

gulp.task('html', function() {
    gulp.src('builds/development/index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(connect.reload())
        .pipe(gulp.dest('builds/dist'));
});

gulp.task('watch', function() {
    gulp.watch('builds/development/scss/**/*.scss', ['css']);
    gulp.watch('builds/development/index.html', ['html']);
    gulp.watch('builds/development/js/*.js', ['js']);
});


// default
gulp.task('default', [
    'connect',
    'html',
    'css',
    'js',
    'watch'
]);