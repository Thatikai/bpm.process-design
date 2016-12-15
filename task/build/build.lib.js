'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    config = require('../config.json');

gulp.task('build:lib', function () {
    var files = require('../manifest.json').libs;

    gulp.src(files)
        .pipe(sourcemaps.init())
        .pipe(concat('process-design.lib.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.target + '/ui/dist'));
});
