import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [name,nname] = useState ('Hanna');
    var [val,nval] = useState()
    
    const ip =(e)=>
    {        
        nval(e.target.value);
        console.log(val) 
    }
    const change =()=> 
    {        
          nname(val)
          nval("") 
    }
  return (
    <div style={{paddingTop:"50px"}}>
      <br/><br/>
        <Typography variant ='h4'>Hello {name}</Typography><br/>
        <TextField variant='outlined' value={val} label='Name' onChange ={ip}> </TextField><br/><br/>
        <Button variant='contained' onClick={change}>Change</Button>
    </div>
  )
}

export default StateBasics