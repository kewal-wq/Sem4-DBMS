import axios from 'axios';
import React,{useState, useEffect} from 'react';

import ParticularTheory from '../../components/theory/theory.component';


const Theories = () => {

    const [theory, setTheory] = useState();

    useEffect(() => {
      
    const getTheories = async() => {
     const res = await axios.get("http://localhost:4000/getTheories");
     console.log(res.data);
     setTheory(res.data);
    }

    getTheories();
    
    }, [])

    const handleCreate = () => {
        //Redirect to create form
    }

    
    
    
  return (
    <div>
      {
          theory ? 
          <div className="all__theories">

              {
                  theory.map(Theory => (
                      <div className="particular_lab">
                          <ParticularTheory course_name={Theory.Course_Name} credit={Theory.Credit} sec1={Theory.Section_1} sec2={Theory.Section_2} key={Theory.Course_Name}/>
                      </div>
                  ))
              }
              <button onClick={handleCreate}>Create Theory</button>
          </div>
          
          :
          <div className="all__theories">
              LOADING...
          </div>
      }
    </div>
  )
}

export default Theories;