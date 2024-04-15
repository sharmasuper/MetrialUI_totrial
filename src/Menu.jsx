import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import { useState } from "react";

function Menu() {
    const [value,setvalue] = useState(0)

   return (
  <div>
    <AppBar>
        <Toolbar>
        <Tabs 
    indicatorColor="secondary" textColor="secondary"
    value={value} onChange={(e,val)=>setvalue(val)}>
        <Tab label="frist"></Tab>
        <Tab label="second"></Tab>
        <Tab label="third"></Tab>
    </Tabs>
        </Toolbar>
    </AppBar>
    
  </div>


   ) 
}

export default Menu;
