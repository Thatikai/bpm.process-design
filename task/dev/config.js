var gulp = require('gulp'),
    fs = require('fs'),
    _ = require('lodash'),
    inquirer = require('inquirer'),
    configTmpl = require('../config.template.json');

gulp.task('config', function(done) {
    'use strict';
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'app',
                message: 'What is the name of your app?',
                default: configTmpl.app
            }
        ],
        function (response) {
            var conf = _.extend(configTmpl, response);
            fs.writeFile('./task/config.json', JSON.stringify(conf, null, 4));
            done();
        }
    );
});