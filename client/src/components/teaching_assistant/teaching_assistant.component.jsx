import axios from "axios";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


const ParticularTA = ({taData}) => {

const [error, setError] = useState("");

    const handleDelete = (TA_ID) => {
        
        axios.delete(`http://localhost:4000/deleteProfessor/${TA_ID}`)
        .then((res) => {
            if(res.data !== "Success")
            {
                setError(res.data);
            }
            else{
                console.log("Deleted Successfully!");
            }
        })
    }

    let navigate = useNavigate();
    const handleEdit = (ta_id) => {
    navigate(`/editTa/${ta_id}`);
    }

    const handleAllot = (ta_id) => {
     navigate(`/getTaAllotment/${ta_id}`)
    }
    return (
        <div className="particular__lab">
            <p className="credit">TA ID: {taData.TA_ID}</p>
            <p className="course_name">Email ID: {taData.Email_ID}</p>
            <p className="sec1">Name: {taData.Name}</p>
            <p className="sec2">Preferred Subjects: {taData.Preferred_Subjects}</p>
            <button onClick={() => handleDelete(taData.TA_ID)}>Delete</button>
            <button onClick={() => handleEdit(taData.TA_ID)}>Edit</button>
            <button onClick={() => handleAllot(taData.TA_ID)}>Get Allotment</button>
            <p>{error}</p>
        </div>
    )
}

export default ParticularTA;