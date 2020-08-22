const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'sschoodb.mysql.database.azure.com',
    user: 'adminschoolar@sschoodb',
    database: 'productos',
    password: 'Admin+123'
});


//module.exports = pool.promise();
module.exports = pool;