import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Taple = () => {
    var name=[{name:"Willy",age:20},{name:"Sam",age:20},{name:"hema",age:20},{name:"josna",age:20}]
  return (
    <div style={{paddingTop:"60px"}}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow >
                        <TableCell style={{color:"blue",fontSize:"20px"}}>Name</TableCell> 
                        <TableCell style={{color:"blue",fontSize:"20px"}}>age</TableCell>                                        
                    </TableRow>                    
                 </TableHead>                  
                 <TableBody>
                        {name.map((value,index)=>{
                            return(
                            <TableRow>
                              <TableCell >{value.name}</TableCell>                                                          
                              <TableCell >{value.age}</TableCell>                              
                            </TableRow>
                        )
                        })}
               </TableBody>        
            </Table>
        </TableContainer>
    </div>
  )
}

export default Taple