
import React from 'react';

//MUI
import { Stack, Grid } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

//components
import PasswordField from '@/components/Textfields/PasswordField';
import TextFieldWithIcon from '@/components/Textfields/TextFieldWithIcon';
import SimpleButton from '@/components/Buttons/SimpleButton'

function SigninupPageMobile() {
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
        <h5>Sign Up</h5>
        <Grid item xs={12} sm={12} md={12} sx={{ }}>
          <TextFieldWithIcon placeholder='Name' icon={<PersonIcon/>} type={'text'} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} sx={{ }}>
          <TextFieldWithIcon placeholder='ab@cd.xy' icon={<AlternateEmailIcon/>} type={'email'} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} sx={{ }}>
          <PasswordField />
        </Grid>
        <Grid item xs={12} sm={12} md={12} sx={{ }}>
          <SimpleButton buttonName='Sign UP' />
        </Grid>
      </Stack>
    </Grid>
  );
}

export default SigninupPageMobile;
