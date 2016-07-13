angular.module('minhasDiretivas',[])
.directive('meuPainel',function(){
    var ddo ={};

    ddo.restrict = 'AE';

    ddo.scope ={
        titulo: '@titulo'
    };

    ddo.transclude = true;

    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;
}).directive('minhaFoto',function(){
    
    //directiv definition object
    var ddo = {};

    ddo.restrict = "AE";

    ddo.scope ={
        titulo :'@',
        url :'@'
    };

    ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';

    return ddo;
});