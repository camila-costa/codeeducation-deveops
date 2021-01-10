/* const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle Rocks!</h1>')
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
}) */

const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql');
const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('Camila')`;
connection.query(sql);

let message = '<h1>Full Cycle Rocks!</h1>'

const query = `select name from people`;
connection.query(query, function (err, result) {
    if (err) throw err;
    Object.keys(result).forEach(function (key) {
        var row = result[key];
        message += '<p>' + row.name + '</p>'
    });
});

connection.end();

app.get('/', (req, res) => {
    res.send(message)
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})