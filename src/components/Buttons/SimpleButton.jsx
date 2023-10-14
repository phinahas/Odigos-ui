import React from 'react'
import Button from '@mui/material/Button';

function SimpleButton({variant="contained",buttonName='contained'}) {
  return (
    <Button variant={variant} fullWidth sx={{width:'100%'}} size="large">{buttonName}</Button>
  )
}

export default SimpleButton