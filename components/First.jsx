import React from 'react'
import { Button, Checkbox, TextField, Typography } from '@mui/material';

const First = () => {
  return (
    <div style={{paddingTop:'60px'}}>
    <h1>Are You Ready ?</h1>
    <input type='Text' placeholder='Name'></input> 
    <br/>
    <input type='Text' placeholder='Course'></input>
    <br/><br/>
    <button>Submit</button> 
    <br/>   
    <Typography variant='h6'>Hanna</Typography>
    <br/>
    <TextField variant ='outlined' label='Enter'></TextField>
    <br/>
    <br/>
    <Button variant='contained'>Submit</Button>
  </div>
  )
}

export default First