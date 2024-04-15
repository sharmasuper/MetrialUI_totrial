import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Collapse, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Modal, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
const array = [{name:"frist",icon:"/"},{name:"second",icon:"||"},{name:"third",icon:"@"},{name:"four",icon:"%"},{name:"mohit",icon:"*"}]
function Menu() {

     const [open,setOpen] = useState(false)

   return (
      <Box>
        <List>
            <ListItem divider>
                <ListItemButton onClick={()=>setOpen(!open)}>
                    <ListItemIcon>{"=>"}</ListItemIcon>
                    <ListItemText primary={"open List"}></ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
        <Collapse in={open}>
        <List sx={{width:300,background:"grey"}}>
            {array.map((listfetch,index)=>{
         return    <ListItem divider key={index}> 
                <ListItemButton onClick={()=>setOpen(false)}>
                    <ListItemIcon>{listfetch.icon}</ListItemIcon>
                    <ListItemText primary={listfetch.name}></ListItemText>
                </ListItemButton>
            </ListItem>
            })}
        </List>
        </Collapse>
      </Box>
   

   ) 
}

export default Menu;
