import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '60vh',
  },

  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:'grey',
    textAlign:'center',
    color:'white'
     
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
   
      <footer className={classes.footer}>
        
          <h3 >EDUNOMICS</h3>
          <p>contact @edunomics.in</p>
          <FacebookIcon fontSize="large"/ > <TwitterIcon fontSize="large" style={{marginLeft:'2%'}}/> <InstagramIcon fontSize="large" style={{marginLeft:'2%'}}/>
          <Typography style={{marginTop:'2%'}}>JOIN US | COOKIE POLICY | TERMS OF USE | TECH | PRIVACY POLICY</Typography>
      </footer>
    </div>
  );
}