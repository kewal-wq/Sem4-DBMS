import axios from 'axios';
import React,{useState, useEffect} from 'react';

import ParticularLab from '../../components/lab/lab.component';


const Labs = () => {

    const [labs, setLabs] = useState();

    useEffect(() => {
      
    const getLabs = async() => {
     const res = await axios.get("http://localhost:4000/getLabs");
     console.log(res.data);
     setLabs(res.data);
    }

    getLabs();
    
    }, [])

    const handleCreate = () => {
        //Redirect to create form
    }

    
    
    
  return (
    <div>
      {
          labs ? 
          <div className="all__labs">

              {
                  labs.map(lab => (
                      <div className="particular_lab">
                          <ParticularLab course_name={lab.Course_Name} credit={lab.Credit} sec1={lab.Section_1} sec2={lab.Section_2} key={Labs.Course_Name}/>
                      </div>
                  ))
              }
              <button onClick={handleCreate}>Create Lab</button>
          </div>
          
          :
          <div className="all__labs">
              LOADING...
          </div>
      }
    </div>
  )
}

export default Labs;