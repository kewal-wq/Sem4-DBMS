import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProfAllotment = () => {
  const theoriesToBeAllotted = [
    "CS202",
    "CS204",
    "CS206",
    "CS208",
    "CS210",
    "CS212",
  ];
  var theoriesAllotted = [];
  const [oneProfSubject, setOneProfSubject] = useState();

  if(localStorage.getItem('theoryAlloted')){
    theoriesAllotted = JSON.parse(localStorage.getItem('theoryAlloted'));
  }

  const { professorId } = useParams();
  
  
  useEffect(() => {
    axios.get(`http://localhost:4000/getProfessor/${professorId}`).then((res) => {
      console.log(res.data[0]);
      giveAllotment(res.data[0]);
    });
    var profSubjects = [];

    const giveAllotment = (prof) => {
      if(prof.Preferred_Subjects.length === 0 || prof.Preferred_Subjects === 1)
      {
         profSubjects = prof.Preferred_Subjects.split('');
      }
         profSubjects = prof.Preferred_Subjects.split(",");
    
      for (let i = 0; i < 6; i++) {
      
        
        if (profSubjects.includes(theoriesToBeAllotted[i]) && !(theoriesAllotted.includes(theoriesToBeAllotted[i]))) {
          setOneProfSubject(theoriesToBeAllotted[i]);
          theoriesAllotted.push(theoriesToBeAllotted[i]);
          localStorage.setItem('theoryAlloted', JSON.stringify(theoriesAllotted));
          theoriesToBeAllotted.splice(i, 1);
        
          break;
        }
      }
      
    };
  }, [professorId, theoriesAllotted, theoriesToBeAllotted]);

  console.log(JSON.parse(localStorage.getItem('theoryAlloted')));
  return <div>
    You have been alloted {oneProfSubject} as your subject
  </div>;
};

export default ProfAllotment;
