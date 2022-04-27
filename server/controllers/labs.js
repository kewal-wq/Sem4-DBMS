const con = require ('../config/db');

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

module.exports.getOneLab = (req, res) => {
    const {CourseName} = req.params;
    const sql = `SELECT * FROM Lab WHERE Course_Name='${CourseName}'`;
    con.query(sql, (err, result) => {
        if(err)
        {
            console.log(err);
            res.status(200).json(err.sqlMessage);
        }
        else{
            res.status(200).json(result);
        }
    })
}

module.exports.insertLab = (req, res) => {
    console.log(req.body);
    const {CourseName, Credit, sections} = req.body;
    
     const sql = `INSERT INTO Lab (Course_Name, Credit, Section_1, Section_2) VALUES ("${CourseName}", "${Credit}", "${sections[0] ? "YES": "NO"}", "${sections[1] ? "YES": "NO"}")`
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
    const {CourseName} = req.params;
    const {Credit, sections} = req.body;
    console.log(req.body);
const sql = `UPDATE Lab SET Credit='${Credit}', Section_1='${sections[0] ? "YES": "NO"}', Section_2='${sections[1] ? "YES": "NO"}' WHERE Course_Name ='${CourseName}'`;
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
            res.status(200).json(err.sqlMessage);
        }
        else{
            res.status(200).json({message: "Success"});
        }
    })
}





