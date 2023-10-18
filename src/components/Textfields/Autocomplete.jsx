import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox({optionValues=[],onChangeFn,displayKey='id',label='category'}) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={optionValues}
      getOptionLabel={(option) => option[displayKey]}
      onChange={(event,value)=>{}}
      sx={{ width: '100%' }}
      fullWidth
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}

