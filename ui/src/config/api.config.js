angular
.module(
    'marble.api.config',
    [
        'common.http.api.service'
    ]
)
.constant('API_BASE', '/marble/api')
.config(ApiConfig);

ApiConfig.$inject = [
    'apiProvider',
    'API_BASE'
];

function ApiConfig (apiProvider, API_BASE) {
    'use strict';

    // set the default header for delete requests
    apiProvider.setApiPath(API_BASE);
}
