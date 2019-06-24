const mysql = require('mysql');

const connection = mysql.createConnection({
	host: '127.0.0.1',
  	user: 'root', 
  	password: '',
  	database: 'dbinfo'
});

connection.connect(function(err) {
	if(err) throw err
	console.log("Connected!");
});

module.exports = connection;