'use strict';

var gulp = require('gulp'),
    less = require('gulp-less'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    config = require('../config.json');

gulp.task('build:less', function () {

    return gulp.src('ui/style/marble.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', '> 5%', 'ie < 10'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .on('error', gutil.log)
        .pipe(gulp.dest(config.target + '/ui/dist'));
});
