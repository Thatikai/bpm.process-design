'use strict';

// Gulpfile.js
var gulp = require('gulp'),
    config = require('../config.json');

gulp.task('watch', ['copy', 'build'], function () {
    gulp.watch(['task/manifest.json'], ['build:lib']);
    gulp.watch(['ui/asset/**/*'], ['copy:asset']);
    gulp.watch(['ui/src/**/*.js'], ['build:src']);
    gulp.watch(['ui/src/**/*.html'], ['build:template']);
    gulp.watch(['ui/style/**/*.less'], ['build:less']);
    gulp.watch(
        [
            config.target + '/ui/**/*',
            config.target + '/**/*.html'
        ]
    );
});
