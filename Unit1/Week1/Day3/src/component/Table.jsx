import React, { useState } from 'react'

const Table = (val) => {
    const [value, setvalue] = useState(null);
    const arr = [];
    const handleChange = () => {
        for (let i = 0; i < 10; i++){
            arr.push(value * (i + 1));
        }
    }
    if (value) {
        handleChange();
    }
   

  return (
      <>
          <input type="number" className='table' onChange={(el) => setvalue(el.target.value)} /> 
          <div>
          {arr.map((el,i)=>(
              <h4 key={i}>{el}</h4>
          ))}
          </div>
          
       { console.log(arr)}
        
      </> 
  )
}

export default Table