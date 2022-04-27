import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';


const CreateTheory = () => {

    const initialState = {
        CourseName: "",
        Credit: 0,
        sections: [],
      };

        const sections = ['Section1', 'Section2'];
        const [theory, setTheory] = useState(initialState);
        const [checked, setChecked] = useState(new Array(sections.length).fill(false));
    
        

        const handleItemChange = (position) => {
            const updatedChecked = checked.map((section, index) => 
                position === index ? !section : section
            );
            setChecked(updatedChecked);
        }

        const handleChange = (event) =>
        setTheory((data) => ({
          ...data,
          [event.target.name]: event.target.value,
        }));

        const addItems = (checked) => {
            checked.map((e, index) => {
              if (e) {
                theory.sections[index] = true;
              }
            });
            
            
        };
        
     
        let navigate = useNavigate();
        const handleSubmit = (e) => {
         e.preventDefault();
         addItems(checked);
         console.log(theory)
         axios.post("http://localhost:4000/insertTheory", theory)
         .then((res) => {
            //  navigate("/");
         })
        }

      
        
        // console.log(lab);
        
        
  return (
    <div>
       <label className="form-label" htmlFor="CourseName">Course Name</label>
         <input
           className="form-input"
           type="text"
           name="CourseName"
           id="CourseName"
           value={theory.CourseName}
           onChange={handleChange}
           placeholder="Name"
         />
         <label className="form-label" htmlFor="Credit">Credit</label>
         <input
           type="text"
           name="Credit"
           id="Credit"
           value={theory.Credit}
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
                value={theory.sections}
                 />
                 <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                 </div>
            )
        })}
        <button onClick={handleSubmit}>Submit</button>
        </div>
  )
      }
    


export default CreateTheory;