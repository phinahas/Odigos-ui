import React from 'react';


import {Grid,Stack} from '@mui/material'




function ExpenseDisplayComponent({totalAmount}) {
  return (
    <Grid item xs={12} sm={12} sx={{background:'#D3E0EA',color:'black',height:'20vh',display:'flex',justifyContent:'center',alignItems:'center'}} >

       <h4>{totalAmount}</h4> 

    </Grid>
  )
}

export default ExpenseDisplayComponent