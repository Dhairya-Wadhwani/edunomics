import React from 'react';
import './Dashboard.css'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider'
import Home2 from './Home'
import Downloads from './Downloads'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Session from './Session'

export default function Board(){

    const [show,setshow]=React.useState(<Home2/>)
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
        <div>
            <div class="header">
                <div class="top-left">Welcome to Edunomics</div>
                <Button aria-controls="simple-menu" aria-haspopup="true" class="myaccount" onClick={handleClick}>My Account</Button>
                <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
            </div>
            <div class="maincontainer">
                   <div class="drawercontainer">
                        <List>
                                    <ListItem button >
                                   
                                    <ListItemText primary="Home" onClick={(event)=>setshow(<Home2/>)}/>
                                    </ListItem>

                                    <ListItem button >
                                   
                                    <ListItemText primary="Sessions" onClick={(event)=>setshow(<Session/>)}/>
                                    </ListItem>

                                    <ListItem button >
                                   
                                    <ListItemText primary="Downloads" onClick={(event)=>setshow(<Downloads/>)} />
                                    </ListItem>

                                    <ListItem button >
                                    
                                    <ListItemText primary="Settings" />
                                    </ListItem>
                                    <ListItem button >
                                    
                                    <ListItemText primary="About" />
                                    </ListItem>

                                </List>
                 </div>
            
                 <div class="dynamiccontainer">
              
         {show}
         </div>
         <div class="staticcontainer">
           <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
           <Paper elevation={3} style={{width:'30%',height:'200px',borderRadius:20,marginTop:'3%'}} ><p style={{marginLeft:'5%'}}>Topics Covered</p> <Divider/></Paper>
           <Paper elevation={3} style={{width:'30%',height:'200px',borderRadius:20,marginTop:'3%',marginLeft:'10%'}} ><p style={{marginLeft:'5%'}}>Recent Activities</p><Divider/></Paper>
           
           </div>
           <div style={{display:'flex',justifyContent:'center'}}>
           <Paper elevation={3} style={{width:'80%',height:'200px',borderRadius:20,marginTop:'5%',}} > <p style={{textAlign:'center'}}>Recent Activities</p><Divider/> </Paper>
           </div>
         </div>
         
                 
            </div>
        
        </div>
    )
}