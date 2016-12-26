angular
.module(
    'marble.dashboard.route',
    [
        'ui.router',
        'marble.dashboard.view'
    ]
)
.config(DashboardRoute);

DashboardRoute.$inject = [
    '$stateProvider'
];

function DashboardRoute ($stateProvider) {
    'use strict';
    $stateProvider
        .state(
            'dashboard',
            {
                url: '/',
                abstract: true,
                parent: 'base',
                templateUrl: '/marble/layout/application.layout.html'
            }
        )
        .state(
            'dashboard.landing',
            {
                url: '',
                controller: 'DashboardView',
                controllerAs: '$ctrl',
                templateUrl: '/marble/dashboard/dashboard.view.html'
            }
        );
}
