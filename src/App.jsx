// import { useState } from 'react'

import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import './App.css'
import Appbar from './Appbar'
// import Test from './Test'


function App() {
  

  return (
    <>
     
      {/* <p>Hello</p> */}
      {/* <Test/> */}
   <AppBar>
    <Toolbar>
      <Typography>Logo</Typography>
      <Button variant="contained" sx={{marginLeft:"auto"}} color='warning' >Hello</Button>
    </Toolbar>
   </AppBar>
     
    </>
  )
}

export default App
