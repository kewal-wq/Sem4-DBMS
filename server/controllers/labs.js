const mysql = require('mysql2');

const con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "dbms",
    user: "root",
    password: process.env.DATABASE_PASSWORD
  });

module.exports.getLabs = (req, res) => {

    const sql = "SELECT * FROM Lab";
    con.query(sql, (err, result) => {
        if(err)
        {
            console.log(err);
            res.status(400).json({message: "Cannot select from lab"});
        }
        else{
            res.send(result)
          
        }
    })
}

module.exports.insertLab = (req, res) => {
    const sql = "INSERT INTO Lab (Course_Name, Credit, Section_1, Section_2) VALUES ('CS268', 2, 'YES', 'NO')"
    con.query(sql, (err, result) => {
        if(err)
        {
            console.log(err);
        }
        else{
            res.send(result)
          
        }
    })
}

module.exports.updateLab = (req, res) => {
const sql = "UPDATE Lab SET Course_Name=' CS260' WHERE Course_Name = 'CS268'";
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

module.exports.deleteLab = (req, res) => {
    const {CourseName} = req.params;
    const sql = `DELETE FROM Lab Where Course_Name='${CourseName}'`;
    con.query(sql, (err, result) => {
        if(err)
        {
            console.log(err);
        }
        else{
            res.status(200).json({message: "Success"});
        }
    })
}





