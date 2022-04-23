import axios from "axios";
import React from "react";


const ParticularTheory = ({course_name, credit, sec1, sec2}) => {

    const handleDelete = (CourseName) => {
        
        axios.delete(`http://localhost:4000/deleteTheory/${CourseName}`)
        .then((res) => {
            console.log("Deleted Theory Successfully")
        })
    }

    const handleEdit = (CourseName) => {
//Redirect to edit form
    }
    return (
        <div className="particular__theory">
            <p className="course_name">Course Name: {course_name}</p>
            <p className="credit">Credit: {credit}</p>
            <p className="sec1">Section1: {sec1}</p>
            <p className="sec2">Section2: {sec2}</p>
            <button onClick={() => handleDelete(course_name)}>Delete</button>
            <button onClick={() => handleEdit(course_name)}>Edit</button>
        </div>
    )
}

export default ParticularTheory;