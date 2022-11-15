// const mysql = require('mysql');
// const db = mysql.createConnection({
//     host : "practice-2.cmqzoesjtyym.ap-northeast-2.rds.amazonaws.com",
//     user : "yoon",
//     password : "lky271600", 
//     database : "new_schema"
// });

// db.connect();
// module.exports = db;
const mongoose = require('mongoose');
module.exports = () => {
  function connect() {
    mongoose.connect('mongodb+srv://Yooonlee:lky271600*@boilerplate.eb2feiy.mongodb.net/test', { dbName: 'mrdaebak' }, function(err) {
      if (err) {
        console.error('mongodb connection error', err);
      }
      console.log('mongodb connected');
    });
  }
  connect();
  mongoose.connection.on('disconnected', connect);
  
};
