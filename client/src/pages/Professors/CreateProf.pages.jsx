import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';


const CreateProf = () => {

    const initialState = {
        Professor_ID: 0,
        Email_ID: "",
        Name:"",
        Preferred_Subjects: []
      };

      const courses = ['CS202', 'CS204', 'CS206', 'CS208','CS210', 'CS212'];
        
        const [prof, setProf] = useState(initialState);
        const [checked, setChecked] = useState(new Array(courses.length).fill(false));

    

        const handleChange = (event) =>
        setProf((data) => ({
          ...data,
          [event.target.name]: event.target.value,
        }));

        const handleItemChange = (position) => {
            const updatedChecked = checked.map((course, index) => 
                position === index ? !course : course
            );
            setChecked(updatedChecked);
        }

        const addItems = (checked) => {
            checked.map((e, index) => {
              if (e && !prof.Preferred_Subjects.includes(courses[index])) {
                // prof.courses[index] = true;
                prof.Preferred_Subjects.push(courses[index]);
              }
            });
            
        };

      
        
     
        let navigate = useNavigate();
        const handleSubmit = (e) => {
         e.preventDefault();
         addItems(checked);
         console.log(prof);
         axios.post("http://localhost:4000/insertProfessor", prof)
         .then((res) => {
            //  navigate("/");
         })
        }

      
        
        // console.log(prof);
        
        
  return (
    <div>
       <label className="form-label" htmlFor="ProfId">Professor ID</label>
         <input
           className="form-input"
           type="text"
           name="Professor_ID"
           id="ProfId"
           value={prof.Professor_ID}
           onChange={handleChange}
           placeholder="Your Institute ID"
         />
         <label className="form-label" htmlFor="Email_ID">Email ID</label>
         <input
           type="text"
           name="Email_ID"
           id="Email_ID"
           value={prof.Email_ID}
           onChange={handleChange}
           className="form-input"
           placeholder="Email"
         />
       <label htmlFor="name">Name</label>
       <input type="text" name="Name" id="name" onChange={handleChange} placeholder="Name" value={prof.Name}/>
      

       {courses.map((name, index) => {
            return(
                <div>
                <input type="checkbox" name={name} id={`custom-checkbox-${index}`} 
                
                checked={checked[index]}
                onChange={() => handleItemChange(index)}
                value={prof.Preferred_Subjects}
                 />
                 <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                 </div>
            )
        })}
        <button onClick={handleSubmit}>Submit</button>
        </div>
  )
      }
    


export default CreateProf;