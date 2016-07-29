
//FOI RETIRADO PORQUE O O EXPRESS LOAD ESTA CUIDANDO DAS DEPENDENCIAS (vide express.js)
//var connectionFactory = require('../infra/connectionFactory');

//definição de rota para a página de produtos 
module.exports = function(app){

    return app.get('/produtos', function(req, res){
       
       //var connection = connectionFactory();
       var connection = app.infra.connectionFactory();
       var produtosDAO = new app.infra.ProdutosDAO(connection); 
       produtosDAO.lista(function(err,results){
            // res.send(results);
            res.render('produtos/lista',{lista:results});
       });
    
       connection.end();
       //res.render("produtos/lista"); 
    });
}