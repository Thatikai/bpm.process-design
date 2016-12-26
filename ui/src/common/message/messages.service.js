angular
.module(
    'common.message.service',
    []
)
.provider(
    'Messages',
    [
        function () {
            'use strict';

            var codes = {};

            this.$get = [
                '$http',
                '$log',
                '$filter',
                function($http, $log, $filter) {
                    var service = this;

                    service.load = function(file) {
                        return $http.get(
                            file,
                            {
                                cache: true
                            }
                        )
                        .then(
                            function(response) {
                                angular.extend(codes, response.data);
                                return codes;
                            }
                        );
                    };

                    // gets a message from the json obj, using dot notation
                    // 'classes.header.title' === {classes: {header: {title: 'Foo'}}}
                    service.getMessage = function(code, getJson) {
                        if (!code) {
                            return null;
                        }
                        var keys = code.split('.'),
                            result = codes,
                            o;

                        for (o = 0; o < keys.length; o++) {
                            if (result[keys[o]]) {
                                result = result[keys[o]];
                            } else {
                                result = null;
                                break;
                            }
                        }

                        if (getJson) {
                            return result;
                        }

                        // we don't want to allow the actual object chunk returned here...
                        // so an incomplete code will result in null here, only strings!
                        return angular.isString(result) ? result : null;
                    };

                    service.getInterpolatedMessage = function(code, values) {
                        var v;
                        var msg = service.getMessage(code);
                        if (msg === null) {
                            msg = '';
                        }
                        for (v = 0; v < values.length; v += 1) {
                            msg = msg.replace('{' + v + '}', values[v]);
                        }
                        return msg;
                    };

                    service.getMessageOrDefault = function(key, defaultValue) {
                        var msg = service.getMessage(key);
                        return msg === null ? defaultValue : msg;
                    };

                    service.getMessagesAsArray = function(code) {
                        return $filter('toArray')(service.getMessage(code, true));
                    };

                    return service;
                }
            ];
        }
    ]
);
