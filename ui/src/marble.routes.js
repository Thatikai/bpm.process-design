angular
.module(
    'marble.routes',
    [
        'ui.router'
    ]
)
.config(
    [
        '$stateProvider',
        function ($stateProvider) {
            'use strict';
            $stateProvider.state('base',
                    {
                        url: '/',
                        templateUrl: '/marble/marble.html'
                    }
                );
        }
    ]
);
