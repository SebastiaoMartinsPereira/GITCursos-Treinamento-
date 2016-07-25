
//definição de rota para a página de produtos 
module.exports = function(app){
    return app.get('/produtos', function(req, res){
       //importa objeto para uso do mysql
       var mysql = require('mysql');
       var connection = mysql.createConnection({
           host: 'localhost',
           user : 'root',
           password: 'impacta',
           database :'impacta' 
       });
       
       connection.query("select * from livros",function(err,results){
            res.send(results);
       });

       connection.end();
       
       //res.render("produtos/lista"); 
    });
}