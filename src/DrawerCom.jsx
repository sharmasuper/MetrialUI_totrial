
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText,useMediaQuery,useTheme } from '@mui/material';
import ArrowDropDownCircleRoundedIcon from '@mui/icons-material/ArrowDropDownCircleRounded';
import React, { useState } from 'react';

function DrawerCom({links}) {
  

  const [open,setopen] = useState(false)
  return (
    <>
    <Drawer  open={open} anchor='left' onClose={()=>setopen(false)} PaperProps={{sx:{background:"yellow"}}}> 
    <List>
        {links.map((item,index)=>{
          return   <ListItemButton key={index} divider onClick={()=>setopen(!open)}>
          <ListItemIcon>
                {item}
          </ListItemIcon>
        </ListItemButton>
        })}
    </List>
    </Drawer>
      <IconButton onClick={()=>setopen(!open)} sx={{marginLeft:"auto",color:"white"}}> 
        <ArrowDropDownCircleRoundedIcon sx={{background:"yellow"}}/>
      </IconButton>
    
    </>
  );
}

export default DrawerCom;

