'use strict';

var gulp = require('gulp'),
    config = require('../config.json');

gulp.task('copy:font', function () {
    gulp
        .src(
            [
                'node_modules/materialize-css/dist/fonts/*',
                'node_modules/font-awesome/fonts/*'
            ]
        )
        .pipe(gulp.dest(config.target + '/ui/fonts'));
});
