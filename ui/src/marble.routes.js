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
            $stateProvider.state('home',
                    {
                        url: '/home',
                        templateUrl: '/marble/marble-home.html'
                    }
                );
        }
    ]
);
