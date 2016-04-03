(
    function () {

        //não deixa x=criar variaveis sem a declaração var;
        'use strict';
        angular.module('app').config(config);


        //injeção de dependências;
        config.$inject = ['$stateProvider', '$urlRouterProvider'];

        function config($stateProvider, $urlRouterProvider) {

            //setamos a rota padrão
            $urlRouterProvider.otherwise('/Listar');
            //url:'layout'
            $stateProvider.
            state('layout', {
                templateUrl: 'app/views/layout.html',
                abstract: true,

            }).
            state('layout.cadastrar', {
                templateUrl: 'app/views/cadastrar.html',
                url: '/Cadastra',
                cache: false,

            }).
            state('layout.listar', {
                templateUrl: 'app/views/listar.html',
                url: '/Listar',
                cache: false,

            });
        }
    }
)();

