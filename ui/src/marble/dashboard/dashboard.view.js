angular
.module(
    'marble.dashboard.view',
    [
        'ui.router',
        'marble.user.service',
        'marble.exam.service',
        'marble.formset.formset-dialog.service',
        'common.utility.moment.filter',
        'common.notification.toast.service',
        'common.message.localize.filter',
        'ui.bootstrap.modal'
    ]
)
.controller('DashboardView', DashboardView);

DashboardView.$inject = ['$log', '$state', '$interpolate', 'orderByFilter', 'UserService', 'ExamService', 'FormsetDialogService', 'ToastService'];

function DashboardView ($log, $state, $interpolate, orderByFilter, UserService, ExamService, FormsetDialogService, ToastService) {
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

    UserService.me().then(
        function (user) {
            ExamService
                .query(user.id)
                .then(
                    function (exams) {
                        angular.forEach(exams, function (exam) {
                            angular.forEach(exam.modules, function (module) {
                                module.displayCount = ctrl.defaultCount;
                                module.sortOn = ctrl.defaultSortOn;
                                module.sortOrder = ctrl.defaultSortOrder;
                                module.formsets = orderByFilter(module.formsets, ctrl.defaultSortOn, ctrl.defaultSortOrder);
                            });
                        });

                        ctrl.exams = exams;
                    }
                );
        }
    );

    ctrl.addForm = function (module) {
        FormsetDialogService
            .openDialog(module)
            .then(
                function (set) {
                    ToastService.add({
                        body: $interpolate('Formset {{ module.prefix }}-{{ set.setName }} created under module {{ module.title }}.')({
                            set: set,
                            module: module
                        })
                    });
                    $state.go('form.content', {formsetId: set.id, moduleId: module.id});
                }
            );
    };
}
