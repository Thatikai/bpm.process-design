angular
.module(
    'marble.ui.loader.view-loader.component',
    [
        'ui.router',
        'ngAnimate'
    ]
)
.component('viewLoader', {
    restrict: 'EA',
    bindings: {
        view: '@'
    },
    templateUrl: '/marble/ui/loader/view-loader.component.html',
    controller: [
        '$log',
        '$scope',
        '$timeout',
        function ($log, $scope, $timeout) {
            'use strict';
            var ctrl = this;

            ctrl.loading = false;

            $scope.$on('$stateChangeStart', function (ev) {
                $timeout(function () {
                    if (!ev.defaultPrevented) {
                        ctrl.loading = true;
                    }
                }, 1);
            });

            function stopLoading () {
                $timeout(function () {
                    ctrl.loading = false;
                }, 1);
            }

            $scope.$on('$stateChangeSuccess', stopLoading);
            $scope.$on('$stateChangeError', stopLoading);
        }
    ],
    controllerAs: '$ctrl',
    transclude: true
});
