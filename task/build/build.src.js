'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    iife = require('gulp-iife'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util'),
    config = require('../config.json');

gulp.task('build:src', function () {
    return gulp
        .src([
            'ui/src/**/*.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(iife())
        .pipe(concat('process-design.src.js'))
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.target + '/ui/dist'));
});
