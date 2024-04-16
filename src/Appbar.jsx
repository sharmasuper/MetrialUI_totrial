

import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
    


function Appbar() {
      const [isSignup,setSignup] = useState(false)
      const [inputs,setinputs] = useState({
        name:"",
        email:"",
        passworld:""
      })
   
        //  console.log(isSignup)
     const resetState = (e) =>{
      setSignup(!isSignup)
      setinputs({name:"",email:"",passworld:""})
     }
       

        const handleChange = (e) =>{
          setinputs((pre)=>(
            {
              ...pre,
               [e.target.name] : e.target.value
            }
          ))
        }

       const  trip=(e)=>{
        e.preventDefault();
        console.log(inputs)
       }

 return (
   <div>
      <form onSubmit={trip}>
      <Box display="flex" flexDirection={"column"} maxWidth={400} alignItems={'center'}
       justifyContent={'center'} margin={"auto"} 
       sx={{marginTop:"50px",
              border:"2px solid black",
            ":hover":{
              boxShadow : "10px 10px 20px #ccc"
            }
       }} padding={3} borderRadius={5} boxShadow={`5px 5px 10px #ccc`}> 

          <Typography variant='h3' padding={2} textAlign='center'>{isSignup?"signup":"login"}</Typography>
          {isSignup&&  <TextField name="name" value={inputs.name} onChange={handleChange} type="text" variant='outlined' placeholder='name' label="name" margin='normal' />  }
          <TextField name="email" onChange={handleChange} value={inputs.email} type={"email"} variant='outlined' placeholder='Email' label="Email" margin='normal'/>
            <TextField name="passworld" onChange={handleChange} value={inputs.passworld} type={"passworld"} variant='outlined' placeholder='passworld' label="passworld" margin='normal'/>
            <Button endIcon={isSignup?<HowToRegOutlinedIcon/>:<LoginIcon/>}  variant='contained' type="submit"  sx={{marginTop:3,borderRadius:3}}>{isSignup?"signup":"login"}</Button>
            <Button endIcon={isSignup?<LoginIcon/>:<HowToRegOutlinedIcon/>} onClick={resetState}  sx={{marginTop:3,borderRadius:3}}>
              
           change To {isSignup?"Login" : "signup"}
              
              </Button>
        </Box>
      </form>
   </div>
 )
 
}







export default Appbar;
