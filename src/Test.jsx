import React, { useState } from 'react';
import TextField from '@mui/material/TextField'
import { Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, Typography } from '@mui/material';
function Test() {
   const [inputs,setInputs] = useState({
    name:"",
    email:"",
    passworld:"",
    subscribe: false,
    age:0
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
 <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column"}}>
<TextField type={'text'} value={inputs.name} name='name' onChange={handleChange} sx={{margin:3}} id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField type={"email"}  name='email' value={inputs.email} onChange={handleChange} sx={{margin:3}} id="filled-basic" label="Filled" variant="filled" />
      <TextField type={'password'} name='passworld' error={true} value={inputs.passworld} onChange={handleChange} sx={{margin:3}} id="standard-basic" label="Standard" variant="standard" />
     
<FormGroup>
  <FormControlLabel  control={<Checkbox onChange={()=>{

setInputs((pre)=>({
    ...pre,subscribe :!inputs.subscribe
}))
     

  }} />} label="subscribe the news latter" />  
</FormGroup>
{/* select */}
<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    name="age"
    label="Age"
    value={inputs.age || ''} // Ensure that the value matches one of the available options or use an empty string
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>



     <button type='submit'>Submit</button>
      </form> 
   </div>
  );
}

export default Test;
