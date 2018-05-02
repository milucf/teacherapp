var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 8889,
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "college_db"
});

connection.connect(function(err) {
  if (err) throw err
});

module.exports = connection;