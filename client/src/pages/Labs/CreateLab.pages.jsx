import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';


const CreateLab = () => {

    const initialState = {
        CourseName: "",
        Credit: 0,
        sections: [],
      };

        const sections = ['Section1', 'Section2'];
        const [lab, setLab] = useState(initialState);
        const [checked, setChecked] = useState(new Array(sections.length).fill(false));
    
        

        const handleItemChange = (position) => {
            const updatedChecked = checked.map((section, index) => 
                position === index ? !section : section
            );
            setChecked(updatedChecked);
        }

        const handleChange = (event) =>
        setLab((data) => ({
          ...data,
          [event.target.name]: event.target.value,
        }));

        const addItems = (checked) => {
            checked.map((e, index) => {
              if (e) {
                lab.sections[index] = true;
              }
            });
            
            
        };
        
     
        let navigate = useNavigate();
        const handleSubmit = (e) => {
         e.preventDefault();
         addItems(checked);
         axios.post("http://localhost:4000/createLab", lab)
         .then((res) => {
            //  navigate("/");
         })
        }

      
        
        console.log(lab);
        
        
  return (
    <div>
       <label className="form-label" htmlFor="CourseName">Course Name</label>
         <input
           className="form-input"
           type="text"
           name="CourseName"
           id="CourseName"
           value={lab.CourseName}
           onChange={handleChange}
           placeholder="Name"
         />
         <label className="form-label" htmlFor="Credit">Credit</label>
         <input
           type="text"
           name="Credit"
           id="Credit"
           value={lab.Credit}
           onChange={handleChange}
           className="form-input"
           placeholder="Credit"
         />
        {sections.map((name, index) => {
            return(
                <div>
                <input type="checkbox" name={name} id={`custom-checkbox-${index}`} 
                
                checked={checked[index]}
                onChange={() => handleItemChange(index)}
                value={lab.sections}
                 />
                 <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                 </div>
            )
        })}
        <button onClick={handleSubmit}>Submit</button>
        </div>
  )
      }
    


export default CreateLab;