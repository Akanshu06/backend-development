const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'akanshu',
    password: 'mysql'
});

module.exports = pool.promise();