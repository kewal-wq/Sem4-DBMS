import React, {useState} from 'react'

const Form = ({setterFunction, label, type, placeholder}) => {

    const sections = ['Section1', 'Section2'];
const [checked, setChecked] = useState(new Array(sections.length).fill(false));

    const handleSectionChange = (position) => {
        const updatedChecked = checked.map((item, index) =>
        position === index ? !item : item
      );
  
      setChecked(updatedChecked);
    }


  return (
    <div>
  
<div><label htmlFor="">{label}</label>
        <input type={type} placeholder={placeholder} onChange={e=> setterFunction(e.target.value)} /></div>

        
        
    </div>
  )
}

export default Form