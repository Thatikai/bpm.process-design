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
<<<<<<< HEAD
            $stateProvider.state('base',
                    {
                        url: '/',
                        templateUrl: '/marble/marble.html'
=======
            $stateProvider.state('home',
                    {
                        url: '/home',
                        templateUrl: '/marble/marble-home.html'
>>>>>>> f181a2767d8699d29731442bbc8d030632128203
                    }
                );
        }
    ]
);
