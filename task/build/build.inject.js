'use strict';

var gulp = require('gulp'),
    inject = require('gulp-inject'),
    config = require('../config.json');
 
gulp.task('build:inject', function () {
  gulp.src('./ui/index.html')
        .pipe(inject(gulp.src(['./public/ui/dist/**/*.js', './public/ui/dist/**/*.css'],
         {read: false}), {ignorePath: 'public', addRootSlash: false}))
        .pipe(gulp.dest('./public'));
});