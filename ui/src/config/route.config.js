angular
.module(
    'marble.route.config',
    [
        'ui.router'
    ]
)
.config(RouteConfig);

RouteConfig.$inject = [
    '$urlRouterProvider'
];

function RouteConfig ($urlRouterProvider) {
    'use strict';

    $urlRouterProvider.otherwise('/home');
}
