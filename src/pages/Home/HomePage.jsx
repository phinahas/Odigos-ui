import React from 'react'

import {Grid,Stack} from '@mui/material';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
//components
import ExpenseDisplayComponent from '@/components/ExpenseDisplayComponent/ExpenseDisplayComponent';
import EntryDisplayCard from '@/components/Cards/EntryDisplayCard';
import FloatingButton from '@/components/Buttons/FloatingButton';

const scrollableGrid = {
  maxHeight: '60vh', // Adjust the max height to your preference
  overflowY: 'auto',
  padding: '10px'
};

function HomePage() {
  return (
    <Grid container>
      <FloatingButton buttonText={"Add"}/>
     <Grid item xs={12} sm={12} sx={{background:''}}>
    <ExpenseDisplayComponent/>
     </Grid>
     <Grid item xs={12} sm={12} sx={{background:'', marginTop:'2px !important', display: 'flex', justifyContent: 'space-evenly'}}>
        <CurrencyRupeeIcon/>
        <EqualizerIcon/>
     </Grid>
     <Grid item xs={12} sm={12} sx={{background:'', marginTop:'2px !important'}}>
      <div style={scrollableGrid}>
      <EntryDisplayCard/>
        <EntryDisplayCard/>
        <EntryDisplayCard/>
        <EntryDisplayCard/>
        <EntryDisplayCard/>
        <EntryDisplayCard/>
        <EntryDisplayCard/>
      </div>
        
     </Grid>
    </Grid>
  )
}

export default HomePage