const mysql = require('mysql2');

const con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "dbms",
    user: "root",
    password: process.env.DATABASE_PASSWORD
  });

  module.exports.getTheories = (req, res) => {

    const sql = "SELECT * FROM Theory";
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

module.exports.insertTheory = (req, res) => {
    const sql = "INSERT INTO Theory (Course_Name, Credit, Section_1, Section_2) VALUES ('CS202', 2, 'YES', 'NO')"
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

module.exports.updateTheory = (req, res) => {
const sql = "UPDATE Theory SET Name = 'Noverun Sir' WHERE Course_Name=''";
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

module.exports.deleteTheory = (req, res) => {
    const {CourseName} = req.params;
    console.log(CourseName);
    const sql = "DELETE FROM Theory Where Course_Name=''";
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