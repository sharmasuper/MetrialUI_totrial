// import { useState } from 'react'


import './App.css'
import Menu from './Menu'

const linksArray = ["Products","Services","Overview","contact Us"]

function App() {
  

  return (
    <>
     
      {/* <p>Hello</p> */}
      {/* <Test/> */}
     <Menu links={linksArray}/>
     
    </>
  )
}

export default App
