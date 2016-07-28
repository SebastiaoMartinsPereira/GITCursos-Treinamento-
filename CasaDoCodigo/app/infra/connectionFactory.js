//importa objeto para uso do mysql
var mysql = require('mysql');
    
function createDBConnection(){
    return mysql.createConnection({
        host: 'localhost',
        user : 'root',
        password: 'impacta',
        database :'impacta' 
    });
}

//wrapper 
module.exports = function(){
    return createDBConnection;
}