const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'br1he3ydbvwczq2gziyd-mysql.services.clever-cloud.com',
    user: 'ujjyf3gvlocovukq',
    database: 'br1he3ydbvwczq2gziyd',
    password: '9QpZlzvcXJzhAVLVB0Zx'
});


//module.exports = pool.promise();
module.exports = pool;