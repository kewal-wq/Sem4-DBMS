import axios from 'axios';
import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import ParticularProf from '../../components/professor/professor.component';


const Professor = () => {

    const [professor, setProfessor] = useState();

    useEffect(() => {
      
    const getProfessors = async() => {
     const res = await axios.get("http://localhost:4000/getProfessors");
     setProfessor(res.data);
    }

    getProfessors();
    
    }, [])
let navigate = useNavigate();
    const handleCreate = () => {
        navigate("/createProfessor");
    }

    
    
    return (
        <div>
      {
          professor ? 
          
          <div className="all__professors">

              {
                 
                  professor.map(prof => (
                      <div className="particular_lab">
                          <ParticularProf professor_id={prof.Professor_ID} proffesorData={prof}/>
                      </div>
                  ))
              }
              <button onClick={handleCreate}>Add Professor</button>
          </div>
          
          :
          <div className="all__professors">
              LOADING...
          </div>
      }
    </div>
  )
}

export default Professor;