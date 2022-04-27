const con = require ('../config/db');

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

module.exports.getTheory = (req, res) => {
    const {CourseName} = req.params;
    const sql = `SELECT * FROM Theory WHERE Course_Name = '${CourseName}'`;
    con.query(sql, (err, result) => {
        if(err)
        {
            res.status(200).json(err.sqlMessage);
        }
        else{
            res.status(200).json(result);
        }
    })
}

module.exports.insertTheory = (req, res) => {
    const {CourseName, Credit, sections} = req.body;
    console.log(req.body);
    const sql = `INSERT INTO Theory VALUES ('${CourseName}', ${Credit}, '${sections[0] ? "YES": "NO"}', '${sections[1] ? "YES": "NO"}')`;
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
    const {CourseName} = req.params;
    const {Credit, sections} = req.body;
const sql = `UPDATE Theory SET Credit=${Credit}, Section_1='${sections[0] ? "YES": "NO"}', Section_2='${sections[1] ? "YES": "NO"}' WHERE Course_Name='${CourseName}'`;
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
    const sql = `DELETE FROM Theory Where Course_Name='${CourseName}'`;
    con.query(sql, (err, result) => {
        if(err)
        {
            res.status(200).json(err.sqlMessage);
        }
        else{
            res.status(200).json({message: "Success"});
        }
    })
}