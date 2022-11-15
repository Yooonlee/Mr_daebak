// "use strict";

// const { use } = require("../routes/home");
// //  정적변수로 설정해야 클래스자체에서 접근할 수 있다. #을 붙이면 private 이 됨.
// const db = require("../config/db");

// class UserStorage {
    
//     static getUserInfo(id_full){
//        return new Promise((resolve, reject) =>{
//         const query = "SELECT * FROM dbsecond where id=?;" 
//             db.query(query,[id_full], (err,data)=>{
//                 if (err) reject(`${err}`);
//                 // console.log(data[0]);
//                 resolve(data[0]);
//             });
//         });
//     }

    
     
//     static async save(userInfo){
//         return new Promise((resolve, reject) =>{
//             const query = "INSERT into dbsecond(id, name, psword) values(?, ?, ?);"
//             db.query(query,[userInfo.id, userInfo.name, userInfo.psword], (err,data)=>{
//                 if (err) reject(`${err}`);
//                 resolve({success : true}); 
//             });
//         });
//     }

// };

// module.exports = UserStorage;