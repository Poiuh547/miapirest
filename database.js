const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'remotemysql.com',
  user: 'R0nB064jJ8',
  password: 'eBLJNx5ftc',
  database: 'R0nB064jJ8',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;
