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
                        url: '/',
                        templateUrl: '/marble/marble.html'
                    }
                );
        }
    ]
);
