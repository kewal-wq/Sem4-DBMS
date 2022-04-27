import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';


const CreateTA = () => {

    const initialState = {
        TA_ID: 0,
        Email_ID: "",
        Name:"",
        Preferred_Subjects: []
      };

      const courses = ['CS262', 'CS264', 'CS266', 'CS268','CS270', 'CS272'];
        
        const [ta, setTa] = useState(initialState);
        const [checked, setChecked] = useState(new Array(courses.length).fill(false));

    

        const handleChange = (event) =>
        setTa((data) => ({
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
              if (e && !ta.Preferred_Subjects.includes(courses[index])) {
                // prof.courses[index] = true;
                ta.Preferred_Subjects.push(courses[index]);
              }
            });
            
        };

      
        
     
        let navigate = useNavigate();
        const handleSubmit = (e) => {
         e.preventDefault();
         addItems(checked);
         console.log(ta);
         axios.post("http://localhost:4000/insertTA", ta)
         .then((res) => {
            //  navigate("/");
         })
        }

      
        
        // console.log(prof);
        
        
  return (
    <div>
       <label className="form-label" htmlFor="TaId">TA ID</label>
         <input
           className="form-input"
           type="text"
           name="TA_ID"
           id="TaId"
           value={ta.TA_ID}
           onChange={handleChange}
           placeholder="Your Institute ID"
         />
         <label className="form-label" htmlFor="Email_ID">Email ID</label>
         <input
           type="text"
           name="Email_ID"
           id="Email_ID"
           value={ta.Email_ID}
           onChange={handleChange}
           className="form-input"
           placeholder="Email"
         />
       <label htmlFor="name">Name</label>
       <input type="text" name="Name" id="name" onChange={handleChange} placeholder="Name" value={ta.Name}/>
      

       {courses.map((name, index) => {
            return(
                <div>
                <input type="checkbox" name={name} id={`custom-checkbox-${index}`} 
                
                checked={checked[index]}
                onChange={() => handleItemChange(index)}
                value={ta.Preferred_Subjects}
                 />
                 <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                 </div>
            )
        })}
        <button onClick={handleSubmit}>Submit</button>
        </div>
  )
      }
    


export default CreateTA;