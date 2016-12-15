'use strict';

var gulp = require('gulp'),
    gls = require('gulp-live-server');

gulp.task('serve', ['copy', 'build'], function() {

    var dir = 'public',
        server = gls.static(dir, 3000);

    server.start();

    //use gulp.watch to trigger server actions(notify, start or stop)
    gulp.watch([dir + '/**/*'], function (file) {
        server.notify.apply(server, [file]);
    });

    gulp.watch(['ui/src/**/*.js'], ['build:src']);
    gulp.watch(['ui/src/**/*.html'], ['build:template']);
    gulp.watch(['ui/index.html'], ['copy:html']);
    gulp.watch(['ui/style/**/*'], ['build:less']);
});
