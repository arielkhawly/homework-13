const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hellogoodbye',
  database: 'burgers_db'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});
module.exports = connection;