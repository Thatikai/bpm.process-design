angular
.module(
    'guide.component.text-components.route',
    [
        'guide.component.text-components.view',
        'ui.router'
    ]
)
.config(TextComponentsRoute);

TextComponentsRoute.$inject = [
    '$stateProvider'
];

function TextComponentsRoute ($stateProvider) {
    'use strict';
    $stateProvider
        .state(
            'components',
            {
                url: '/components',
                abstract: true,
                templateUrl: '/marble/layout/application.layout.html'
            }
        )
        .state(
            'components.text',
            {
                url: '/text',
                controller: 'TextComponentsView',
                controllerAs: '$ctrl',
                templateUrl: '/guide/component/text-components.view.html'
            }
        );
}
