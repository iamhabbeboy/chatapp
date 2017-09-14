var mysql = require('mysql');

module.exports = {
  connect: () => {
    return con = mysql.createConnection({
      host    : 'localhost',
      user    : 'root',
      password: 'root',
      database: 'chatapp'
    });
  }

}
