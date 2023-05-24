import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react'

const Hello = () => {
    var [name,nname] = useState ("");
    
    const change =()=> {        
        nname("To Home Page") 
    }
    const changeg =()=> {        
        nname("To Gallery") 
    }
    const changec =()=> {        
        nname("To Contact") 
    }
  return (
    <div style={{paddingTop:"50px"}}>       
        <br/><br/><br/>
        <Button variant='contained' onClick={change}>Home</Button>&nbsp;
        <Button variant='contained' color='secondary' onClick={changeg}>Gallery</Button>&nbsp;
        <Button variant='contained' onClick={changec}>Contact</Button>
        <br/><br/><br/>
        <Typography variant ='h4'>Welcome {name}</Typography>    
    </div>
  )
}

export default Hello