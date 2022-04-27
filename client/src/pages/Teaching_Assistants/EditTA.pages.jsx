import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditTa = () => {
    const courses = ['CS262', 'CS264', 'CS266', 'CS268','CS270', 'CS272'];


  const [ta, setTa] = useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [checked, setChecked] = useState(new Array(courses.length).fill(false));

  const {TaId} = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/getTAs/${TaId}`)
      .then((res) => {
          console.log(res.data[0])
        setTa(res.data[0]);
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

  var taSubjects = [];

  const addItems = (checked) => {
    if(ta.Preferred_Subjects.length === 0 || ta.Preferred_Subjects.length === 1)
      taSubjects =  ta.Preferred_Subjects.split('');
      else{
        taSubjects = ta.Preferred_Subjects.split(',');
      }
    checked.map((e, index) => {
      if (e && !taSubjects.includes(courses[index])) {

        taSubjects.push(courses[index]);
        console.log(taSubjects)
      }
    });
  };

  let navigate = useNavigate();
  const handleEdit = (e) => {
    e.preventDefault();
    addItems(checked);
    console.log(email, name, taSubjects);
     axios.put(`http://localhost:4000/editTA/${TaId}`,{
     Email: email,
      Name: name,
      PreferredSubjects: taSubjects
    })
     .then((res) => {
        //  navigate("/");
     })
  };

  ;
  return ta ? (
    <div>
      <label className="form-label" htmlFor="Email_ID">
        Email ID
      </label>
      <input
        type="text"
        name="Email"
        id="Email_ID"
        defaultValue={ta.Email_ID}
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
        defaultValue={ta.Name}
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

export default EditTa;