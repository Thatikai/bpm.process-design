angular
.module(
    'marble.dashboard.view',
    [
        'ui.router'
    ]
)
.controller('DashboardView', DashboardView);

DashboardView.$inject = ['$log', '$state', '$interpolate'];

function DashboardView ($log, $state, $interpolate) {
    'use strict';

    var ctrl = this;

    ctrl.defaultCount = 5;
    ctrl.defaultSortOn = 'lastModified';
    ctrl.defaultSortOrder = true;

    ctrl.sort = function (module, on) {
        if (module.sortOn === on) {
            module.sortOrder = !module.sortOrder;
        } else {
            module.sortOn = on;
            module.sortOrder = ctrl.defaultSortOrder;
        }
    };
}
