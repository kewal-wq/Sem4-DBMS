import axios from 'axios';
import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import ParticularTA from '../../components/teaching_assistant/teaching_assistant.component';


const TeachingAssistants = () => {

    const [teaching_assistant, setTeaching_assistant] = useState();

    useEffect(() => {
      
    const getTAs = async() => {
     const res = await axios.get("http://localhost:4000/getTAs");
    //  console.log(res.data);
     setTeaching_assistant(res.data);
    }

    getTAs();
    
    }, [])
    let navigate = useNavigate();

    const handleCreate = () => {
     navigate("/createTA")
    }

    
    
    return (
        <div>
      {
          teaching_assistant ? 
          
          <div className="all__professors">

              {
                 
                  teaching_assistant.map(ta => (
                      <div className="particular_lab">
                        {console.log(ta)}
                          <ParticularTA ta_id={ta.TA_ID} taData={ta}/>
                      </div>
                  ))
              }
              <button onClick={handleCreate}>Add Teaching Assistant</button>
          </div>
          
          :
          <div className="all__professors">
              LOADING...
          </div>
      }
    </div>
  )
}

export default TeachingAssistants;