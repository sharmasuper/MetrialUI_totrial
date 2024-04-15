import { useState } from "react";
import { Menu as MuiMenu, MenuItem, Button } from "@mui/material"; // Aliased import

function Menu() {
    const [anchorElm,setAnchorElm] = useState(null)
    const [open,setopen] = useState(false);

    const handleClose = () =>{
        setAnchorElm(null);
        setopen(false)
    }
    const handleClick = (e) =>{
  setAnchorElm(e.currentTarget)
  setopen(true)
    }

    return (
        <div>
            <Button varient="contained" onClick={handleClick}> open Menu</Button>
            <Button varient="contained" onClick={handleClick}>open Menu again</Button>
            <MuiMenu anchorEl={anchorElm} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Balance</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </MuiMenu>
           
        </div>
    );
}

export default Menu;
