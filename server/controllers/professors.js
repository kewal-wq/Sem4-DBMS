const con = require ('../config/db');


module.exports.getProfessors = (req, res) => {

    const sql = "SELECT *FROM Professor";
    con.query(sql, (err, result) => {
        if(err)
        {
            console.log(err);
            res.status(400).json({message: "Cannot select from Professor!"});
        }
        else{
            res.send(result)
          
        }
    })
}

module.exports.insertProfessor = (req, res) => {
    const {Professor_ID, Email_ID, Name, Preferred_Subjects} = req.body;
    console.log(req.body);
    const sql = `INSERT INTO Professor VALUES (${Professor_ID}, "${Email_ID}", "${Name}", "${Preferred_Subjects}", NULL)`;
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

module.exports.updateProfessor = (req, res) => {
    const {profId} = req.params;
    const {Email, Name, PreferredSubjects} = req.body;
const sql = `UPDATE Professor SET Email_ID='${Email}', Name='${Name}', Preferred_Subjects='${PreferredSubjects}' WHERE Professor_ID = '${profId}'`;
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

module.exports.deleteProfessor = (req, res) => {
    const {profId} = req.params;
    const sql = `DELETE FROM Professor Where Professor_ID='${profId}'`;
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

module.exports.getProfessor = (req, res) => {
    const {profId} = req.params;
    console.log(profId);
    const sql = `SELECT * FROM Professor WHERE Professor_ID=${profId}`;
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

