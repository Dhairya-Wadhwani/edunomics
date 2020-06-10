import React from 'react'
import Paper from '@material-ui/core/Paper'


export default function Home2()
{
    return(
        <div>
               
             <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
           <Paper elevation={3} style={{width:'30%',height:'200px',borderRadius:20,marginTop:'3%'}} ><p style={{marginTop:'20%',textAlign:'center'}}>All Interactive sessions</p></Paper>
           <Paper elevation={3} style={{width:'30%',height:'200px',borderRadius:20,marginTop:'3%',marginLeft:'10%'}} ><p style={{marginTop:'20%',textAlign:'center'}}>Practice Questions</p></Paper>
           
           </div>
           <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
           <Paper elevation={3} style={{width:'30%',height:'200px',borderRadius:20,marginTop:'3%'}} ><p style={{marginTop:'20%',textAlign:'center'}}>Downloads</p> </Paper>
           <Paper elevation={3} style={{width:'30%',height:'200px',borderRadius:20,marginTop:'3%',marginLeft:'10%'}} ><p style={{marginTop:'20%',textAlign:'center'}}>Ask Questions</p></Paper>
           
           </div>
        </div>
    )
}