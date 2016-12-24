angular
.module(
    'marble.routes',
    [
        'ui.router',
        'marble.ui.loader.view-loader.component'
    ]
)
.config(
    [
        '$stateProvider',
        function ($stateProvider) {
            'use strict';
            $stateProvider.state('base',
                    {
                        url: '',
                        abstract: true,
                        templateUrl: '/marble/marble.html'
                    }
                )
                .state(
                    'home',
                    {
                        url: '/home',
                        abstract: true,
                        templateUrl: '/marble/dashboard/dashboard.view.html'
                    }
                );
        }
    ]
);
