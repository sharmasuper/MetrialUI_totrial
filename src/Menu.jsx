import { AppBar, Box, Button, Drawer, Grid, Tab, Tabs, Toolbar, Typography, useMediaQuery } from "@mui/material";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useState } from "react";
import DrawerCom from "./DrawerCom";
import { useTheme } from '@mui/material/styles';

function Menu({links}) {  
      const theme = useTheme();
    console.log(theme)
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch)
    
    const [value,setvalue] = useState(0);
         return (
             <>
        <AppBar>
              <Toolbar>
           {  isMatch?<> 
            <Typography>
                        <ShoppingCartCheckoutIcon/>
                    </Typography>
            <DrawerCom links={links} /> </> :  <Grid sx={{placeItems:"center"}} container>
                <Grid item xs={2}>
                    <Typography>
                        <ShoppingCartCheckoutIcon/>
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                   
                    <Tabs indicatorColor="secondary" textColor="inherit" value={value} onChange={(e,val)=>setvalue(val)}>
               {links.map((item,index)=>{
             return    <Tab key={index} label={item} />
               })}
                 </Tabs>
                  
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={3}>
                    <Box display="flex" justifyContent="space-between">
                        <Button sx={{marginLeft:'auto'}} variant="container">Login </Button>
                        <Button sx={{marginLeft:1}} variant="container">Sign Up </Button>
                    </Box>
                </Grid>
               
               </Grid>
} 
              </Toolbar>
        </AppBar>
        </>
)}

   

export default Menu;
