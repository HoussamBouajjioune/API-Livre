// const mysql = require("mysql");
const dbconfig = require("../config/db");
var mysql = require('mysql2');

const connection = mysql.createConnection({
    host: dbconfig.HOST,
    user: dbconfig.USER,
    password: dbconfig.PASSWORD,
    database: dbconfig.DB
});


connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  // console.log('connected as id ' + connection.threadId);
});

module.exports = connection;