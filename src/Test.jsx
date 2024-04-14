import React, { useState } from 'react';
import TextField from '@mui/material/TextField'
import { Typography } from '@mui/material';
function Test() {
    const [Name,setname] = useState("")

  return (
   <div>

<TextField type={'text'} value={Name} onChange={(e)=>setname(e.target.value)} sx={{margin:3}} id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField type={"email"}  sx={{margin:3}} id="filled-basic" label="Filled" variant="filled" />
      <TextField type={'password'} sx={{margin:3}} id="standard-basic" label="Standard" variant="standard" />
      <Typography>{Name}</Typography>
   </div>
  );
}

export default Test;
