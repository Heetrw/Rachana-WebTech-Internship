const mysql = require('mysql2');

// Create connection
const db = mysql.createConnection({
    host: 'localhost',     
    user: 'root',  
    password: 'HA@SQL%rw', 
    database: 'testdb'
});

// Connect MySQL
db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('MySQL Connected...');
});

module.exports = db;
