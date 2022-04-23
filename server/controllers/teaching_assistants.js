const mysql = require('mysql2');

const con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "dbms",
    user: "root",
    password: process.env.DATABASE_PASSWORD
  });

  module.exports.getTAs = (req, res) => {

    const sql = "SELECT * FROM Teaching_Assistant";
    con.query(sql, (err, result) => {
        if(err)
        {
            console.log(err);
            res.status(400).json({message: "Cannot select from theory"});
        }
        else{
            res.send(result)
          
        }
    })
}

module.exports.insertTA = (req, res) => {
    const sql = "INSERT INTO Teaching_Assistant (TA_ID, Email_ID, Name, Course_Name ) VALUES (202051040,'avnit@gmail.com','avnit','CS262')"
    con.query(sql, (err, result) => {
        if(err)
        {
            console.log(err);
        }
        else{
            res.send("Inserted")
          
        }
    })
}

module.exports.updateTA = (req, res) => {
const sql = "UPDATE Teaching_Assistant SET Name = 'Noverun Sir' WHERE TA_ID=";
con.query(sql, (err, result) => {
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("Updated Successfully")
    }
})
}

module.exports.deleteTA = (req, res) => {
    const {CourseName} = req.params;
    console.log(CourseName);
    const sql = "DELETE FROM Teaching_Assistant Where TA_ID=";
    con.query(sql, (err, result) => {
        if(err)
        {
            console.log(err);
        }
        else{
            console.log("Deleted Successfully!");
        }
    })
}