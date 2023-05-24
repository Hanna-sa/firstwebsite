import { AppBar, Typography, Toolbar, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography sx={{flexGrow:1}} >Hello</Typography>
                 {/* <Button variant='text' color='inherit'>Login</Button> */}
                <Button variant='outlined'><Link to='/hello'style={{textDecoration :'none',color:'white'}} align='left'>Welcome</Link></Button>                
                 <Button variant='text'><Link to={'/'} style={{textDecoration :'none',color:'white'}}>Hello</Link></Button>
                <Button variant='text'><Link to='/taple'style={{textDecoration :'none',color:'white'}}>Table</Link></Button>
                <Button variant='text'><Link to='/first'style={{textDecoration :'none',color:'white'}}>LogIn</Link></Button>                
                <Button variant='text'><Link to='/axios'style={{textDecoration :'none',color:'white'}}>Data</Link></Button>                
            </Toolbar>
        </AppBar>    
    </div>
  )
}

export default Nav