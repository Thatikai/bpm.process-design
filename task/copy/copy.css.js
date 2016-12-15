'use strict';

var gulp = require('gulp'),
    config = require('../config.json');

gulp.task('copy:css', function () {
    gulp
        .src(
            [
                'node_modules/bootstrap/dist/css/bootstrap.min.css',
                'node_modules/bootstrap/dist/css/bootstrap.min.css.map',
                'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
                'node_modules/bootstrap/dist/css/bootstrap-theme.min.css.map',
                'node_modules/font-awesome/css/font-awesome.min.css'
            ]
        )
        .pipe(gulp.dest(config.target + '/ui/dist'));
});
