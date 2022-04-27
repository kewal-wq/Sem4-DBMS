import axios from "axios";
import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const TaAllotment = () => {
  const labsToBeAllotted = [
    "CS262",
    "CS264",
    "CS266",
    "CS268",
    "CS270",
    "CS272",
  ];
  var labsAllotted = [];
    const [oneTaLab, setTaLab] = useState();

  if(localStorage.getItem('labsAlloted')){
    labsAllotted = JSON.parse(localStorage.getItem('labsAlloted'));
  }

  const { TaId } = useParams();
  
  useEffect(() => {
    axios.get(`http://localhost:4000/getTAs/${TaId}`).then((res) => {
      console.log(res.data[0])
      giveAllotment(res.data[0]);
    });

    const giveAllotment = (ta) => {
      const taSubjects = ta.Preferred_Subjects.split(",");
      for (let i = 0; i < 6; i++) {
      
        
        if (taSubjects.includes(labsToBeAllotted[i]) && !(labsAllotted.includes(labsToBeAllotted[i]))) {
          setTaLab(labsToBeAllotted[i]);
          console.log(oneTaLab)
          labsAllotted.push(labsToBeAllotted[i]);
          localStorage.setItem('labsAlloted', JSON.stringify(labsAllotted));
          labsToBeAllotted.splice(i, 1);
        
          break;
        }
      }
      
    };
  }, []);

  console.log(JSON.parse(localStorage.getItem('labsAlloted')));
  return <div>
    You have been alloted {oneTaLab} as your subject
  </div>;
};

export default TaAllotment;