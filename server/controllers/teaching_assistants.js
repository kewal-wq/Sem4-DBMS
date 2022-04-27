const con = require ('../config/db');


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
    const{TA_ID,Email_ID, Name, Preferred_Subjects} = req.body;
    console.log(req.body);
    const sql = `INSERT INTO Teaching_Assistant VALUES (${TA_ID},'${Email_ID}','${Name}','${Preferred_Subjects}', NULL)`
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
    const {TAId} = req.params;
    const {Email, Name, PreferredSubjects} = req.body;
const sql = `UPDATE Teaching_Assistant SET Email_ID = '${Email}', Name='${Name}', Preferred_Subjects='${PreferredSubjects}' WHERE TA_ID=${TAId}`;
con.query(sql, (err, result) => {
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("Updated Successfully");
    }
})
}

module.exports.deleteTA = (req, res) => {
    const {TAId} = req.params;
    const sql = `DELETE FROM Teaching_Assistant Where TA_ID=${TAId}`;
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

module.exports.getTA = (req, res) => {
    const {TAId} = req.params;
    const sql = `SELECT * FROM Teaching_Assistant WHERE TA_ID = ${TAId}`;
    con.query(sql, (err, result) => {
        if(err)
        {
            res.status(200).json(err.sqlMessage);
        }
        else{
            res.status(200).json(result)
        }
    })
}