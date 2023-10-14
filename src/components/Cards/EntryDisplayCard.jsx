import * as React from 'react';
import {Box,Stack,Grid,Typography} from '@mui/material';

export default function BoxSx() {
  return (
    <Grid container sx={{background:'#F6F5F5',marginTop:'5px',borderRadius:'12px'}}>
  

        <Stack sx={{background:'',width:'100%',margin:'0px !important',padding:'5px', lineHeight:'0px !important'}} >
        <p>12 oct 2020</p>
        <p>category/title</p>
        </Stack>
        <Stack sx={{background:'',width:'100%',margin:'0px !important',padding:'5px'}} justifyContent={"flex-end"} direction="row" >
            <p>200 INR</p>
        </Stack>
 
       
     </Grid>
  );
}