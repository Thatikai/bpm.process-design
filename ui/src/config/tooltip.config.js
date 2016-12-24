angular
.module(
    'marble.tooltip.config',
    [
        'ui.bootstrap.tooltip'
    ]
)
.config(TooltipConfig);

TooltipConfig.$inject = [
    '$uibTooltipProvider'
];

function TooltipConfig ($uibTooltipProvider) {
    'use strict';

    // set the default header for delete requests
    $uibTooltipProvider.options({
        appendToBody: true
    });
}
