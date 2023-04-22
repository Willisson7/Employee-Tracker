const mysql = require('mysql2');

const connect = {
    host: 'localhost',
    user: 'root',
    password: '@14th3SQL!',
    database: 'company_db',
}

const db = mysql.createConnection(connect);

module.exports = db;