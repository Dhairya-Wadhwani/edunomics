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
      color:'white'
  },

  submitbutton:{
      borderRadius:50,
      height:'50px',
      width:'100px',
      margin:'8%',
      marginLeft:'35%',
      color:'white',
      backgroundColor:'transparent',
      borderColor:'white'
      

  }

}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <div class="container2">
    <img src="./wall.jpg"  style={{width:'50%',height:'700px',marginLeft:'20%'}}/>
    
    
   
    
      <div class="top-right2">
      <div className={classes.paper} >
       
       <Typography component="h1" variant="h5" style={{marginTop:'10%',color:'white'}}>
         SIGN UP
       </Typography>
       
       <form className={classes.form} >
         <div className={classes.inputcontainer}>
         <p>Name</p>
         <input type="text"  style={{height:'30px',width:'300px'}}/>
         </div>
         <div className={classes.inputcontainer}>
         <p>Email Id</p>
         <input type="email"  style={{height:'30px',width:'300px'}}/>
         </div>
         <div className={classes.inputcontainer}>
         <p>Password</p>
         <input type="password"  style={{height:'30px',width:'300px'}}/>
         </div>
         <div className={classes.inputcontainer}>
         <p>Mobile Number</p>
         <input type="number"  style={{height:'30px',width:'300px'}}/>
         </div>
         
        
        
       <a href="/" style={{display: "block", textDecoration: "none",
            width: "115px",
            height: "25px",
            background:"transparent",
            padding: "10px",
            textAlign: "center",
            borderRadius: 50,
            margin:'10%',
            marginLeft:'30%',
            border:'solid',
            color: "white",
            fontWeight: "bold"}}>  Sign Up</a>
        
       </form>
     </div>
    
 
      </div>
      </div>
    
     
      
      
    
  );
}