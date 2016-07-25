//iniciar o servidor sem usar o express
// //importar bibliotecas.
// var http = require('http');

// //instancia um novo servidor
// server = http.createServer(function(req,res){
//     //define o cabecalho que irá retornar na conexao
//     res.writeHead(200,{'Content-Type' : 'text/html; charset=utf-8'})
//     //conteudo da requisição
//     res.end('<html> <body><h1>Listando os produtos</h1></body></html>');
// }).listen(3000,'localhost'); //porta que está escutando a requisição
// console.log('Servidor rodando...');//mesnsagem de log no terminal.
// // node nome do arquivo para executar a aplicação.


// //inicar o servidor com o Exoress.
// var express = require('express');
// var app = express();
// app.set('view engine','ejs');

//carregado agora a partir de outro arquivo.
var app = require('./config/express')();

//passo a variável app para ser usado durante a criação de rotas
var rotaProdutos = require('./app/routes/produtos')(app);

app.listen(3000, function(){
    console.log("Servidor rodando....");
});