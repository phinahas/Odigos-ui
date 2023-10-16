import React from 'react'
import Button from '@mui/material/Button';

function SimpleButton({variant="contained",buttonName='contained', onClickActn}) {
  return (
    <Button variant={variant} fullWidth sx={{width:'100%'}} size="large" onClick={onClickActn}>{buttonName}</Button>
  )
}

export default SimpleButton