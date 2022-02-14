
const res = require("express/lib/response");
const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "labnodejs"
})

class Word {
    constructor(start, end, word) {
        this.start = start;
        this.end = end;
        this.word = word;
    }

    static getById(id,cb){
        let sql = "Select * from users where user_id = ?";
        db.query(sql,id,(err,data)=>{
            if(err) throw err;
            cb(data[0]);
        })
    }

    static addUser(fullName,password,cb){
        let sql = "Insert into users (fullName,password) values (?,?)";
        
        db.query(sql,[fullName,password],(err,data)=>{
            if(err) throw err;
            cb(data);
        })
    }

    static updateUser(id,fullName,password,role,cb){
        let sql = "update users set fullName = ? , password = ?, role = ? where user_id = ?";
        db.query(sql,[fullName,password,role,id],(err,data)=>{
            if(err) throw err;
            
            cb(data);
        })
    }

    static getAllBook(cb){
        let sql = "Select * from book";
        db.query(sql,(err, data)=>{
            if(err){
                cb(err)
            } else{
                cb(data);
            }
        })
    }
    static getAllUser(cb){
        let sql = "Select * from users";
        db.query(sql,(err, data)=>{
            if(err){
                cb(err)
            } else{
                cb(data);
            }
        })
    }
    static deleteById(id,cb){
        let sql = "DELETE from users where user_id = ?";
        
        db.query(sql,id,(err,data)=>{
            if(err) throw err;
            cb(data);
        })
    }
   
}

module.exports = Word;