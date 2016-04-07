(
    function () {

        //não deixa x=criar variaveis sem a declaração var;
        'use strict';
        angular.module('app').service('amigoService', amigoService);
        amigoService.$inject = ['$http', 'url'];
        function amigoService($http, url) {
            this.listar = function () {
                return $http(
                    {
                        url: url + "amigo/listar",
                        method: 'GET'
                    });
            };
            this.cadastrar = function () {
                return $http(
                    {
                        url: url + "amigo/cadastrar",
                        method: 'GET'
                    });
            };
        };
    }
)();