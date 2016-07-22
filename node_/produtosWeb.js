//importar bibliotecas.
var http = require('http');

//instancia um novo servidor
server = http.createServer(function(req,res){
    //define o cabecalho que irá retornar na conexao
    res.writeHead(200,{'Content-Type' : 'text/html; charset=utf-8'})
    //conteudo da requisição
    res.end('<html> <body><h1>Listando os produtos</h1></body></html>');
}).listen(3000,'localhost'); //porta que está escutando a requisição
console.log('Servidor rodando...');//mesnsagem de log no terminal.


// node nome do arquivo para executar a aplicação.