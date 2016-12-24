'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    templateCache = require('gulp-angular-templatecache'),
    config = require('../config.json');

gulp.task('build:template', function() {
    return gulp
        .src(
            [
                'ui/src/**/*.html'
            ]
        )
        .pipe(templateCache(
            'marble.template.js',
            {
                module: 'marble.templates',
                root: '/',
                standalone: true
            }
        ))
        .on('error', gutil.log)
        .pipe(gulp.dest(config.target + '/ui/dist'));
});
