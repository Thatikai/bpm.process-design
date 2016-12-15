'use strict';

var gulp = require('gulp'),
    config = require('../config.json');

gulp.task('copy:asset', function () {
    gulp
        .src(
            [
                'ui/asset/**/*'
            ]
        )
        .pipe(gulp.dest(config.target + '/ui/asset'));
});
