
import React from 'react';

//MUI
import { Stack, Grid } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';


//components
import PasswordField from '@/components/Textfields/PasswordField';
import TextFieldWithIcon from '@/components/Textfields/TextFieldWithIcon';
import SimpleButton from '@/components/Buttons/SimpleButton'

function SigninPageMobile() {
  return (
    <Grid
      container
      sx={{
        //background: 'cyan',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack sx={{ background: '', width: '100%', display: 'flex', alignItems: 'center' }} spacing={2}>
        <h5>Sign In</h5>
        <Grid item xs={12} sm={12} md={12} sx={{ }}>
        <TextFieldWithIcon placeholder='ab@cd.xy' icon={<AlternateEmailIcon/>} type={'email'} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} sx={{ }}>
          <PasswordField />
        </Grid>
        <Grid item xs={12} sm={12} md={12} sx={{ }}>
          <SimpleButton buttonName='Sign IN' />
        </Grid>
      </Stack>
    </Grid>
  );
}

export default SigninPageMobile;
