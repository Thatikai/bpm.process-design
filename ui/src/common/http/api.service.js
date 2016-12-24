// http wrapper that allows a platform to define a base api path for services
angular
.module(
    'common.http.api.service',
    []
)
.provider(
    'api',
    function() {
        'use strict';

        var apiPath = '',
            pathIsSet = false;

        // this can only be configured once, to prevent accidental overrides
        this.setApiPath = function(path) {
            if (pathIsSet) {
                throw new Error('Api: error defining apiPath: ' + path + ' apiPath already defined! ' + apiPath);
            }

            if (!angular.isString(path)) {
                throw new Error('Api: invalid apiPrefix!');
            }

            apiPath = path;
            pathIsSet = true;
        };

        this.$get = [
            '$http',
            '$cacheFactory',
            function($http, $cacheFactory) {
                var wrapper = function(config) {
                    if (config.url) {
                        config.url = apiPath + config.url;
                    }

                    return $http(config);
                },
                cache = $cacheFactory('api');

                var methods = ['get', 'head', 'post', 'put', 'delete', 'jsonp', 'patch'],
                    i = 0,
                    setPath = function(method) {
                        wrapper[method] = function(url) {
                            var args = Array.prototype.slice.call(arguments, 1),
                                config;

                            url = apiPath + url;

                            if (method !== 'get') {
                                cache.removeAll();
                            } else {
                                if (!args[0]) { args[0] = {}; }
                                config = args[0];
                                if (config.cache !== false) {
                                    config.cache = cache;
                                }
                            }

                            args.unshift(url);

                            return $http[method].apply(this, args);
                        };
                    };

                for (i = 0; i < methods.length; i++) {
                    setPath(methods[i]);
                }

                return wrapper;
            }
        ];
    }
);
