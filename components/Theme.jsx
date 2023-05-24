import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import React from 'react'

const Theme = () => {
    const theme = createTheme({
        palette: {
          primary: {
            main: purple[500],
          },
          secondary: {
            main: green[500],
          }
        }
      })
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography sx={{flexGrow:1}} >Hello</Typography>
                </Toolbar>
        </AppBar>  
    </div>
  )
}

export default Theme