import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Apien = () => {
  var[user,setUser]=useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
    setUser(response.data)
    console.log(response.data)
    }).catch(err=>console.log(err))
  })
  
  return (
    <div style={{paddingTop:'60px'}}>
      <TableContainer>
        <Table aria-label="simple table">
                  <TableHead>
                    <TableRow style={{backgroundColor:'yellow'}}>
                      <TableCell >Name</TableCell>
                      <TableCell>UserName</TableCell>
                      <TableCell>Email</TableCell>
                    </TableRow>
                  </TableHead>   
                  <TableBody>
                    {user.map((value,index)=>{
                      return(
                        <TableRow>                          
                          <TableCell>{value.name}</TableCell>
                          <TableCell>{value.username}</TableCell>
                          <TableCell>{value.email}</TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>              
                </Table>
      </TableContainer>
    </div>
  )
}

export default Apien