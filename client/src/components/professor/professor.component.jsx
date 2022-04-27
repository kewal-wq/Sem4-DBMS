import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const ParticularProf = ({proffesorData}) => {

    const [error, setError] = useState("");

    const handleDelete = (professor_id) => {

        
        
        axios.delete(`http://localhost:4000/deleteProfessor/${professor_id}`)
        .then((res) => {
            if(res.data !== "Success")
            {
               setError(res.data);
            }
            else{
              console.log("Deleted Successfully!")
            }
           
        })

        
    }

  

    let navigate = useNavigate();

    const handleEdit = (professor_id) => {
        console.log(professor_id);
    navigate(`/editProf/${professor_id}`);
    }

    const handleAllot = (professor_id) => {
     navigate(`/getProfAllotment/${professor_id}`);
     document.getElementById("AllotProf").disable = true
    }
    return (
        <div className="particular__lab">
            <p className="credit">Professor ID: {proffesorData.Professor_ID}</p>
            <p className="course_name">Email ID: {proffesorData.Email_ID}</p>
            <p className="sec1">Name: {proffesorData.Name}</p>
            <p className="sec2">Preferred Subjects: {proffesorData.Preferred_Subjects}</p>
            <button onClick={() => handleDelete(proffesorData.Professor_ID)}>Delete</button>
            <button onClick={() => handleEdit(proffesorData.Professor_ID)}>Edit</button>
            <button id="AllotProf" onClick={() => handleAllot(proffesorData.Professor_ID)}>Get Allotment</button>

           <p>{error}</p>
        </div>
    )
}

export default ParticularProf;