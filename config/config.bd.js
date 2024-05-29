// import mysql from 'mysql'
const mysql = require('mysql');
// Нове з'єднання на локал хості з параметрами
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'furnistar'
});
// З'єдннуємся з БД
connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected");
    } else {
        console.log("Error while connecting whith datavase")
    }
});

// Експорт з'єднання
module.exports = connection;
