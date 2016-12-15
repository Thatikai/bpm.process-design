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
            'process-design.template.js',
            {
                module: 'process-design.templates',
                root: '/',
                standalone: true
            }
        ))
        .on('error', gutil.log)
        .pipe(gulp.dest(config.target + '/ui/dist'));
});
