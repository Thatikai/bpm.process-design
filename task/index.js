'use strict';
var requireDir = require('require-dir'),
    runSequence = require('run-sequence'),
    gulp = require('gulp'),
    fs = require('fs');

try {
    require('./config.json');
} catch (err) {
    fs.writeFileSync('./task/config.json', JSON.stringify(require('./config.template.json'), null, 4));
}

requireDir('./build', { recurse: true });
requireDir('./copy', { recurse: true });
requireDir('./dev', { recurse: true });

gulp.task('init', ['config']);
gulp.task('copy', function (done) {
    runSequence('copy:css', 'copy:html', 'copy:asset', 'copy:font', done);
});
gulp.task('build', function (done) {
    runSequence('build:lib', 'build:src', 'build:less', 'build:template', done);
});
gulp.task('default', function (done) {
    runSequence('copy', 'build', done);
});