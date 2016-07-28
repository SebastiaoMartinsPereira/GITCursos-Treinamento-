//configura o express para ser usado na aplicação.
var express = require('express');
var load = require('express-load');

//aqui é utilizado o padrão commom Js que é um definição de como 
//gerar modulos que podem ser carregados em qualquer parte da aplicação
module.exports = function configuraExpress(){
    
    var app = express();
    
    app.set('view engine','ejs');
    app.set('views','./app/views');
  
    //define as pastas que possuem  dependencias que deverão ser carregas pelo load
    load('routes',{cwd:'app'}) //cwd diz a paste a partir de onde o obj load deverar comecar a busca pelas dependencias.
    .then('infra')  //carrega mai dependências
    .into(app); //seta o objeto que irá receber estas dependencias.

    return app;
}
