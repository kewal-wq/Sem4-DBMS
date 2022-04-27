import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditLab = () => {
  const initialState = {
    CourseName: "",
    Credit: 0,
    sections: [],
  };

  const sections = ["Section1", "Section2"];
  const [lab, setLab] = useState(initialState);
  const [checked, setChecked] = useState(
    new Array(sections.length).fill(false)
  );
  const [courseName, setCourseName] = useState();
  const [credit, setCredit] = useState();

  const handleItemChange = (position) => {
    const updatedChecked = checked.map((section, index) =>
      position === index ? !section : section
    );
    setChecked(updatedChecked);
  };

  console.log(checked);

  // console.log(sections);

  const { CourseName } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/getLab/${CourseName}`).then((res) => {
      // console.log(res.data);
      setLab(res.data);
      setCourseName(res.data[0].Course_Name);
      setCredit(res.data[0].Credit);
    });
  }, [CourseName]);

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // addItems(checked);
    console.log(courseName, credit, checked);
     await axios.put(`http://localhost:4000/updateLab/${CourseName}`, {
       CourseName: courseName,
      Credit: credit,
      sections: checked

     })
     .then((res) => {
        //  navigate("/");
     })
  };

  console.log(courseName, credit);

  return lab[0] ? (
    <div>
      <label className="form-label" htmlFor="CourseName">
        Course Name
      </label>
      <input
        className="form-input"
        type="text"
        name="Course_Name"
        id="CourseName"
        defaultValue={lab[0].Course_Name}
        onChange={(e) => setCourseName(e.target.value)}
        placeholder="Course Name"
      />
      <label className="form-label" htmlFor="Credit">
        Credit
      </label>
      <input
        type="text"
        name="Credit"
        id="Credit"
        defaultValue={lab[0].Credit}
        onChange={(e) => setCredit(e.target.value)}
        className="form-input"
        placeholder="Credit"
      />
      {sections.map((name, index) => {
        return (
          <div>
            <input
              type="checkbox"
              name={name}
              id={`custom-checkbox-${index}`}
              checked={checked[index]}
              onChange={() => handleItemChange(index)}
              // defaultValue={lab[0].sections}
            />
            <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
          </div>
        );
      })}
      <button onClick={handleSubmit}>Edit</button>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default EditLab;
