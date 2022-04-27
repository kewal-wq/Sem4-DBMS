import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditProf = () => {
  const courses = ["CS202", "CS204", "CS206", "CS208", "CS210", "CS212"];

  const [prof, setProf] = useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [checked, setChecked] = useState(new Array(courses.length).fill(false));

  const { professorId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/getProfessor/${professorId}`)
      .then((res) => {
        setProf(res.data[0]);
        setEmail(res.data[0].Email_ID);
        setName(res.data[0].Name);
      });
  }, []);

  const handleItemChange = (position) => {
    const updatedChecked = checked.map((course, index) =>
      position === index ? !course : course
    );
    setChecked(updatedChecked);
  };

  var profSubjects = [];

  const addItems = (checked) => {
    if(prof.Preferred_Subjects.length === 0 || prof.Preferred_Subjects.length === 1)
      profSubjects =  prof.Preferred_Subjects.split('');
      else{
        profSubjects = prof.Preferred_Subjects.split(',');
      }
    checked.map((e, index) => {
      if (e && !profSubjects.includes(courses[index])) {

        profSubjects.push(courses[index]);
        console.log(profSubjects)
      }
    });
  };

  let navigate = useNavigate();
  const handleEdit = (e) => {
    e.preventDefault();
    addItems(checked);
    console.log(email, name, profSubjects);
     axios.put(`http://localhost:4000/editProfessor/${professorId}`,{
     Email: email,
      Name: name,
      PreferredSubjects: profSubjects
    })
     .then((res) => {
        //  navigate("/");
     })
  };

  console.log(prof);
  return prof ? (
    <div>
      <label className="form-label" htmlFor="Email_ID">
        Email ID
      </label>
      <input
        type="text"
        name="Email"
        id="Email_ID"
        defaultValue={prof.Email_ID}
        onChange={(e) => setEmail(e.target.value)}
        className="form-input"
        placeholder="Email"
      />
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="Name"
        id="name"
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        defaultValue={prof.Name}
      />

      {courses.map((name, index) => {
        return (
          <div>
            <input
              type="checkbox"
              name={name}
              id={`custom-checkbox-${index}`}
              checked={checked[index]}
              onChange={() => handleItemChange(index)}
            />
            <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
          </div>
        );
      })}
      <button onClick={handleEdit}>Edit</button>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default EditProf;
