'use strict';

var gulp = require('gulp'),
    config = require('../config.json');

gulp.task('copy:css', function () {
    gulp
        .src(
            [
                'node_modules/materialize-css/dist/css/materialize.min.css',
                'node_modules/angular-material/angular-material.css',
                'node_modules/font-awesome/css/font-awesome.min.css'
            ]
        )
        .pipe(gulp.dest(config.target + '/ui/dist'));
});
