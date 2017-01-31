angular
.element(document)
.ready(function() {
    'use strict';
    var name = 'marble';
    var dependencies = [
            'ngAnimate',
            'ui.router',
            'marble.templates',
            'marble.location.config',
            'marble.route.config',
            'marble.routes',
            'marble.startup'
        ];
    var app = angular.module(name, dependencies);
    angular.bootstrap(document, [app.name], {strictDi: true});
    console.log('working');
});
