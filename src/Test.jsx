import React, { useState } from 'react';
import TextField from '@mui/material/TextField'
import { Typography } from '@mui/material';
function Test() {
   const [inputs,setInputs] = useState({
    name:"",
    email:"",
    passworld:""
   })
 
   const handleChange = (e) =>{
    setInputs((predata)=>({
        ...predata,
        [e.target.name] : e.target.value

    }))
   
   }

 const handleSubmit = (e) =>{
 e.preventDefault();
 console.log(inputs)


 }
  return (
   <div>
 <form onSubmit={handleSubmit}>
<TextField type={'text'} value={inputs.name} name='name' onChange={handleChange} sx={{margin:3}} id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField type={"email"}  name='email' value={inputs.email} onChange={handleChange} sx={{margin:3}} id="filled-basic" label="Filled" variant="filled" />
      <TextField type={'password'} name='passworld' value={inputs.passworld} onChange={handleChange} sx={{margin:3}} id="standard-basic" label="Standard" variant="standard" />
     
     <button type='submit'>Submit</button>
      </form> 
   </div>
  );
}

export default Test;
