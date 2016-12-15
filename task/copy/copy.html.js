'use strict';

var gulp = require('gulp'),
    config = require('../config.json');

gulp.task('copy:html', function () {
    return gulp.src(
        [
            '../webapp/**/*.html'
        ]
    )
    .pipe(gulp.dest(config.target));
});
