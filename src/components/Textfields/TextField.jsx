import React from 'react';
import TextField from '@mui/material/TextField';

function TextField({variant='outlined', label='outlined', onChangeFn }) {
  return (
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
  )
}

export default TextField