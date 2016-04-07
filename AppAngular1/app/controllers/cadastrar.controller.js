(
    function () {

        //não deixa x=criar variaveis sem a declaração var;
        'use strict';

        angular.module('app').controller('cadastrarController', cadastrarController);
        cadastrarController.$inject = ['$scope', 'amigoService'];
        function cadastrarController($scope, amigoService) {
            var vm = this;
            vm.amigo = [];
            vm.cadastrar = function () {
                amigoService.cadastrar(vm.amigo).then(sucesso, erro);
            };
            function sucesso() {
                alert(retorno.data);
            };
            function erro() {
                alert(retorno.data)
            };
        }
    }
)();