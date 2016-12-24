angular
    .module(
        'marble.startup',
        [
            'ui.router'
        ]
    )
    .run(Startup);

Startup.$inject = [
    '$log',
    '$rootScope',
    '$urlMatcherFactory'
];

function Startup ($log, $rootScope, $urlMatcherFactory) {
    'use strict';
    $urlMatcherFactory.strictMode(false);
}
