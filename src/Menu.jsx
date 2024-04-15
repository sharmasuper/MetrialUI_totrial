import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { useState } from "react";

function Menu() {
    const [open,setopen] = useState(false)

   return (
  <div>
    <Button onClick={()=>setopen(true)}>Open Dialog</Button>
     <Modal hideBackdrop open={open} onClose={()=>setopen(false)}>
       <Box position="absolute" top="50%" left="50%">
        <Typography>It is a Modal</Typography>
         <Button onClick={()=>setopen(false)}>Click Me</Button>
       </Box>
     </Modal>
    
  </div>


   ) 
}

export default Menu;
