// importando os modulos usados na aplicação.
angular.module('alurapic',['minhasDiretivas','ngAnimate','ngRoute'])
.config(function($routeProvider,$locationProvider){ //Injetado pelo ngRoute

    //utilizado para que não seja nescessário colocar o hash(#) na url para informar a partial a ser buscada pelo angular
     $locationProvider.html5Mode(true);

    //quando esta url for informada será devolvido para o usuario
    //o arquivo do templete url e este arquivo usa o controller citado logo abaixo.
    $routeProvider.when('/fotos', {
            templateUrl: 'partials/principal.html',
            controller: 'FotosController'
        });

    $routeProvider.when('/fotos/new', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'            
        });


// rota alternativa, usada quando a url informada pelo usuário não existir ou não for encontrada.
    $routeProvider.otherwise({redirectTo: '/fotos'});

});