const mysql = require('mysql2');

const con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "dbms",
    user: "root",
    password: process.env.DATABASE_PASSWORD
  });

module.exports.getLabs = (req, res) => {
    // const sql = "CREATE TABLE Lab (Course_name VARCHAR(10), Credit INT(2), Section INT(2))";
    const sql = "SELECT * FROM lab"
    con.query(sql, (err, result) => {
        if(err)
        {
            console.log(err);
        }
        else{
            res.send(result)
          console.log(result);
           
        }
    })
}