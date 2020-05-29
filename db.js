const mysql = require('mysql2');


const connection = mysql.createConnection({
    host : 'localhost',
    user : 'myuser',
    password: 'mypass',
    database: 'crud'
})

function getAllpersons(){

    return new Promise(function (resolve,reject){
        connection.query(
            `SELECT * FROM persons`,
            function(err,rows,cols){
                if(err){
                    reject(err)
                } else {
                    resolve(rows)
                }
            }
        )
    })
}

function addNew(name,age,city){
     return new Promise (function(resolve,reject){
         connection.query(
             `INSERT INTO persons (name,age,city) VALUES (?,?,?)`,
             [name,age,city],
             function(err,result){
                 if(err){
                     reject(err)
                 } else {
                     resolve()
                 }
             }
         )
     })
}

exports = module.exports = {
    getAllpersons,addNew
}