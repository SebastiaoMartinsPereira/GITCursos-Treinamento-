//configura o express para ser usado na aplicação.
var express = require('express');
var app = express();
app.set('view engine','ejs');
app.set('views','./app/views');


//aqui é utilizado o padrão commom Js que é um definição de como 
//gerar modulos que podem ser carregados em qualquer parte da aplicação
module.exports = function configuraExpress(){
    return app;
}
