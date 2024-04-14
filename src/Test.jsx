import React from 'react';
import Button from '@mui/material/Button'
function Test() {
  return (
   <div>
   <Button onClick={()=>alert("button Clicked frist")} color="success" sx={{margin:3}} size="small"  variant="text">frist</Button>
   <Button onClick={()=>alert("button Clicked second")} color="error" sx={{margin:3}} size="medium" variant="contained">Second</Button>
   <Button onClick={()=>alert("button Clicked third")} color="secondary" sx={{margin:3}} size="large" variant="">third</Button>
   </div>
  );
}

export default Test;
