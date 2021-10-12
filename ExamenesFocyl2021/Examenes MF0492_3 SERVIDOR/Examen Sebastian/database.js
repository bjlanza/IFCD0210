const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'sebastian',
    password: 'exam3n',
    database: 'cursoweb',
})
console.log('Connected to cursoweb database!')
connection.connect();

