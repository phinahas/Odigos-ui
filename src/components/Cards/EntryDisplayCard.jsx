import * as React from 'react';
import {Box,Stack,Grid,Typography} from '@mui/material';



export default function BoxSx({date,category,title,amount}) {
  return (
    <Grid container sx={{background:'#F6F5F5',marginTop:'5px',borderRadius:'12px'}}>
  

        <Stack sx={{background:'',width:'100%',margin:'0px !important',padding:'5px', lineHeight:'0px !important'}} >
        <p style={{color:'#362222'}}>{date}</p>
        <p><span style={{fontSize:'18px',fontWeight:'bold'}}>{category}</span>/<span>{title}</span></p>
        </Stack>
        <Stack sx={{background:'',width:'100%',margin:'0px !important',padding:'5px'}} justifyContent={"flex-end"} direction="row" >
            <p> <span style={{color:'#DA0037'}}>{amount}&nbsp;</span>INR</p>
        </Stack>
 
       
     </Grid>
  );
}