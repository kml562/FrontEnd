import React, { useState } from "react";
import "./From.css";

const From = () => {
  const form = {
    name: "",
    email: "",
    phone: "",
    skill: "",
  };
  const [formdata, setfrom] = useState(form);
  const [result, setresult] = useState(null);
  const [showdata, setdata] = useState(false);
  const handleChange = (e) => {
    setfrom({
        ...formdata, 
        [e.target.name] : e.target.value
    })
  }
  const submit = (event) => {
    event.preventDefault();
    setdata(true);
      setresult((data) => (data ? [...data, formdata] : [formdata]));
      setfrom(form);
    };
    //  console.log(result)
  return (
    <>
      <form onSubmit={submit}>
        <h1>Form</h1>
        <input name='name' onChange={handleChange} value={formdata.name} type="text" placeholder='Your name?'/>
                <input name='phone' onChange={handleChange} value={formdata.phone} type="tel" placeholder='Your phone number?'/>
                <input name='email' onChange={handleChange} value={formdata.email} type="email" placeholder='Your email?'/>
                <input name='skill' onChange={handleChange} value={formdata.skill} type="text" placeholder='Your skill?'/>
              <input type="submit" placeholder="submit" id="submitbtn" />
              <div className='table-container'> 
{showdata && ( <div>
        <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Skill</th>
            </tr>
        </thead>

        <tbody>
            {result.map((data, index) => (
            <tr key={index}>
                <td>{data.name}</td>
                <td>{data.phone}</td>
                <td>{data.email}</td>
                <td>{data.skill}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
)}

      </div>
        
    
          </form>
          
    </>
  );
};

export default From;
