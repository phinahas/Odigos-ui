"use client";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


import { Grid, Stack } from '@mui/material';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
//components
import ExpenseDisplayComponent from '@/components/ExpenseDisplayComponent/ExpenseDisplayComponent';
import EntryDisplayCard from '@/components/Cards/EntryDisplayCard';
import FloatingButton from '@/components/Buttons/FloatingButton';
import AddExpenseFormComponent from '@/components/Dialog/AddExpenseFormComponent';

//helpers
import axios from '@/axios';
import { getToken } from '@/utils/commonFns';
import Loader from '@/components/Loader/Loader';
import Snackbar from '@/components/Snackbar/Snackbar';


const scrollableGrid = {
  maxHeight: '60vh', // Adjust the max height to your preference
  overflowY: 'auto',
  padding: '10px'
};

function HomePage() {

  const [loading, setLoading] = useState(false);
  const [snackbarState, setSnackbarState] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('Testing alerts');
  const [snackbarServity, setSnackbarServity] = useState('info');
  const [categories, setCategories] = useState([]);
  const [labels,setLabels] = useState([]);

  const [formState, setFormState] = useState(false);

  const changeSnackbarState = ()=>{
    setSnackbarState(false)
  }
  //let user = useSelector((state)=>state.user);

  useEffect(() => {
    setLoading(true);
    axios.get('/user/get-categories', { headers: { Authorization: getToken() } }).then((response) => {
      if (response.status != 200) {
        setCategories([]);
        setLoading(false);
        return;
      }
      setCategories(response.data.categories);
      setLoading(false);

    }).catch((error) => {
      console.log(error);
      setSnackbarMessage(error.response.data.message || error.message || "Something went wrong");
      setSnackbarServity("error");
      setSnackbarState(true);
    })

    axios.get('/user/get-labels', { headers: { Authorization: getToken() } }).then((response) => {
      if (response.status != 200) {
        setLabels([]);
        setLoading(false);
        return;
      }
      setLabels(response.data.labels);
      setLoading(false);

    }).catch((error) => {
      console.log(error);
      setSnackbarMessage(error.response.data.message || error.message || "Something went wrong");
      setSnackbarServity("error");
      setSnackbarState(true);
    })


  }, [])



  const changeFormState = () => {
    //console.log("btn clicked")
    setFormState(true)
  }

  const closeForm = () => {
    setFormState(false);
  }

  const addNewExpense = (data)=>{
    axios.post('/user/add-expense',data,{headers:{Authorization:getToken()}}).then((response)=>{
      Console.log(response);
    }).catch((err)=>{
      console.error(err);
    })
  }

  const addNewCategory = (data)=>{
    axios.post('/user/create-category',data,{headers:{Authorization:getToken()}}).then((response)=>{

    }).catch((error)=>{
      
    });
  }

  return (
    <>
      <Loader openState={loading} />
      <Snackbar message={snackbarMessage} openStatus={snackbarState} severity={snackbarServity} onCloseFunction={changeSnackbarState} />

      <Grid container>
        <FloatingButton buttonText={"Add"} clickAction={changeFormState} />
        <AddExpenseFormComponent openState={formState} changeOpenState={closeForm} categories={categories} labels={labels} addEntryActn={addNewExpense} addNewCategory={addNewCategory} />
        <Grid item xs={12} sm={12} sx={{ background: '' }}>
          <ExpenseDisplayComponent />
        </Grid>
        <Grid item xs={12} sm={12} sx={{ background: '', marginTop: '2px !important', display: 'flex', justifyContent: 'space-evenly' }}>
          <CurrencyRupeeIcon />
          <EqualizerIcon />
        </Grid>
        <Grid item xs={12} sm={12} sx={{ background: '', marginTop: '2px !important' }}>
          <div style={scrollableGrid}>
            <EntryDisplayCard />
            <EntryDisplayCard />
            <EntryDisplayCard />
            <EntryDisplayCard />
            <EntryDisplayCard />
            <EntryDisplayCard />
            <EntryDisplayCard />
          </div>

        </Grid>
      </Grid>
    </>
  )
}

export default HomePage