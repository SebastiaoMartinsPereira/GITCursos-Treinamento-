angular.module('alurapic').controller('FotosController',function($scope,$http){
    
    $scope.fotos = [];
    $scope.filtro = '';

    $http.get('/v1/fotos')
    .success((retorno) => $scope.fotos = retorno)
    .error( erro => console.log(erro));

    // $http.get('/vv1/fotos')
    // .then((retorno) => $scope.fotos = retorno.data)
    // .catch( erro => console.log(erro));
});