import { AppBar, Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { useState } from "react";

function Menu() {
    const [open,setopen] = useState(false)

   return (
  <div>
    <Button onClick={()=>setopen(true)}>Open Dialog</Button>
     <Dialog hideBackdrop open={open} onClose={()=>setopen(false)}>
        <DialogTitle>This is my Dialog</DialogTitle>
        <DialogContent>
            <DialogContentText>
               A dialog is a popup window which can ask user simething like an infomation or conformation
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={()=>setopen(false)}>cancel</Button>
            <Button onClick={()=>setopen(false)}>agree</Button>
        </DialogActions>
     </Dialog>
    
  </div>


   ) 
}

export default Menu;
