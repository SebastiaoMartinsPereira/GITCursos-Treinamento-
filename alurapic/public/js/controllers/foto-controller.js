angular.module('alurapic')
.controller('FotoController',function($scope,$http){


   try {
        $scope.foto = {};
        $scope.mensagem = "";
        $scope.submeter = function(){
            
            //validação do formulário feita elo angular 
            if ($scope.formulario.$valid) {

                // uso do ajax a partir da injeção http feita pelo angular
                $http.post('/v1/fotos', $scope.foto)
                .success(function() {
                     $scope.foto = {};
                    $scope.mensagem = 'Foto adicionada com sucesso';
                })
                .error(function(erro) {
                    $scope.mensagem ='Não foi possível cadastrar a foto';
                    console.log(erro);
                })
            }
    };

   } catch (error) {
       console.log(error)
   } 

});