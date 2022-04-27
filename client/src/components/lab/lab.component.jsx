import axios from "axios";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import "./lab.styles.css";

const ParticularLab = ({course_name, credit, sec1, sec2}) => {

    const [error, setError] = useState("")
    const handleDelete = (CourseName) => {
        
        axios.delete(`http://localhost:4000/deleteLab/${CourseName}`)
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

    const handleEdit = (CourseName) => {
    navigate(`/editLab/${CourseName}`);
    }
    return (
        <div className="particular__lab">
            <p className="credit">Credit: {credit}</p>
            <p className="course_name">Course Name: {course_name}</p>
            <p className="sec1">Section1: {sec1}</p>
            <p className="sec2">Section2: {sec2}</p>
            <button onClick={() => handleDelete(course_name)}>Delete</button>
            <button onClick={() => handleEdit(course_name)}>Edit</button>
            <p>{error}</p>
        </div>
    )
}

export default ParticularLab;