angular
.module(
    'marble.animate.config',
    [
        'ngAnimate'
    ]
)
.config(AnimateConfig);

AnimateConfig.$inject = [
    '$animateProvider'
];

function AnimateConfig ($animateProvider) {
    'use strict';

    // set the default header for delete requests
    $animateProvider.classNameFilter(/^((?!(fa-spinner)).)*$/);
}
