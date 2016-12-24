angular
.module(
    'marble.location.config',
    [
        'ui.router'
    ]
)
.config(LocationConfig);

LocationConfig.$inject = [
    '$locationProvider',
    '$stateProvider'
];

function LocationConfig ($locationProvider, $stateProvider) {
    'use strict';

    // set push state to true
    $locationProvider.html5Mode(true, true);
}
