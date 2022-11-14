"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }
    async login( ){
        const client = this.body;
        const {id, psword, role} =  await UserStorage.getUserInfo(client.id);
        if(id)
        {
            if(id === client.id && psword === client.psword){
                if(role === '1') return {success: '1'}; 
                else if(role === '2') return {success: '2'};
                else  return {success: '3'};
            }
            else{
                return {success : '4', msg: "비밀번호가 틀렸습니다."};
            }
        }
        return {success: '4', msg: "존재하지 않는 아이디입니다."};
    }
    async register() {
        const client = this.body;
        try{
            const response = await UserStorage.save(client);
            return response;
        }catch(err){
            return {success : false, msg: err}; //throw뒤에 적은 err 문자열이 그대로 들어감
        }
    }
}


module.exports = User;