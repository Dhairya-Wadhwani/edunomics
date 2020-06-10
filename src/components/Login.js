import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './Home.css'



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:'#8a2be2',
    width:'140%',
    
    
  },
 
  // 
  

  inputcontainer:{
      marginLeft:'2%',
      color:'black'
  },

  submitbutton:{
      borderRadius:50,
      height:'50px',
      width:'100px',
      marginLeft:'8%',
      marginTop:'2%'
     
      
      

  }

}));

export default function SignIn() {
  const classes = useStyles();

  return (
   <div>
       
     
       
       <form className={classes.form} >
         <div className={classes.inputcontainer}>
         <p>Name</p>
         <input type="text"  style={{height:'30px',width:'300px'}} placeholder="type admin"/>
         </div>
         
         <div className={classes.inputcontainer}>
         <p>Password</p>
         <input type="password"  style={{height:'30px',width:'300px'}} placeholder="type 1234"/>
         </div>
        
         </form>
         <a href="/dashboard" >Login</a>
        
      
        
      
     </div>
    
 
     
    
     
      
      
    
  );
}