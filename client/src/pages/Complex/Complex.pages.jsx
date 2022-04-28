import axios from 'axios'
import React, {useState, useEffect} from 'react'

const Complex = () => {


    const [taLab, setTaLab] = useState("");


    useEffect(() => {
      axios.get("http://localhost:4000/complex/taLab")
      .then((res) => {
          console.log(res.data[0])
setTaLab(res.data[0])
      })
    
     
    }, [])
    
  return (
      taLab ? 
    <div>{taLab}</div>
    : <h1>Loading...</h1>
  )
}

export default Complex