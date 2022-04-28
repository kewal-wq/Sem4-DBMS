const con = require ('../config/db');

module.exports.getComplex1 = (req, res) => {

    const sql = "select lab.Course_Name, teaching_assistant.Name from lab inner join teaching_assistant on teaching_assistant.Preferred_Subjects = lab.Course_Name";
    con.query(sql, (err, result) => {
        if(err)
        {
            console.log(err);
            res.status(400).json({message: "Cannot select from lab"});
        }
        else{
            res.status(200).json(result)
          
        }
    })
  

}

module.exports.getComplex2 = (req, res) => {

    const sql = "select professor.Professor_ID, professor.name, Theory.COURSE_NAME FROM Professor LEFT JOIN THEORY ON Professor.Preferred_Subjects = Theory.Course_Name && Theory.SECTION_1 ='YES'";
    con.query(sql, (err, result) => {
        if(err)
        {
            console.log(err);
            res.status(400).json({message: "Cannot select from lab"});
        }
        else{
            res.status(200).json(result)
          
        }
    })
  

}


module.exports.getComplex3 = (req, res) => {

    const sql = "select professor.professor_ID, professor.Name, professor.preferred_subjects from professor ,theory where theory.section_2 = 'no' && professor.Name ='novarun' && theory.course_name = professor.preferred_subjects";

    con.query(sql, (err, result) => {
        if(err)
        {
            console.log(err);
            res.status(400).json({message: "Cannot select from lab"});
        }
        else{
            res.status(200).json(result)
          
        }
    })
  

}

module.exports.getComplex4 = (req, res) => {

    const sql = "select * from lab order by Credit";

    con.query(sql, (err, result) => {
        if(err)
        {
            console.log(err);
            res.status(400).json({message: "Cannot select from lab"});
        }
        else{
            res.status(200).json(result)
          
        }
    })
  

}

module.exports.getComplex5 = (req, res) => {

    const sql = "select * from professor order by Name";

    con.query(sql, (err, result) => {
        if(err)
        {
            console.log(err);
            res.status(400).json({message: "Cannot select from lab"});
        }
        else{
            res.status(200).json(result)
          
        }
    })
  

}