import React from 'react';
import TextField from '@mui/material/TextField';

function TextField({variant='outlined', label='outlined', onChangeFn }) {
  return (
    <TextField id="outlined-basic" label={label} variant={variant}  onChange={(e)=>{onChangeFn(e.target.value)}}  />
  )
}

export default TextField