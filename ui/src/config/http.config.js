angular
.module(
    'marble.http.config',
    [
        'ui.router'
    ]
)
.config(HttpConfig);

HttpConfig.$inject = [
    '$httpProvider'
];

function HttpConfig ($httpProvider) {
    'use strict';

    // set the default header for delete requests
    $httpProvider.defaults.headers.common['Content-Type'] = $httpProvider.defaults.headers.post['Content-Type'];
    // include interceptor
    //$httpProvider.interceptors.push('IdInterceptor');
}
