const mysql = require('mysql');
const db = mysql.createConnection({
    host : "practice-2.cmqzoesjtyym.ap-northeast-2.rds.amazonaws.com",
    user : "yoon",
    password : "lky271600", 
    database : "new_schema"
});

db.connect();
module.exports = db;
