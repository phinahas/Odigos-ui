import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, Stack, Typography } from "@mui/material";

// components
import Autocomplete from "@/components/Textfields/Autocomplete";
import SimpleButton from '@/components/Buttons/SimpleButton'

export default function MaxWidthDialog({
  openState = false,
  changeOpenState,
  dataForComponent,
}) {
  console.log(dataForComponent);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("lg");

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openState}
        onClose={changeOpenState}
        sx={{ fontFamily: "Poppins !important" }}
      >
        <DialogTitle
          marginBottom={1}
          sx={{
            fontFamily: "Poppins !important",
            fontSize: "16px",
            background: "#303737",
            color: "white",
          }}
        >
          <Typography>Add Expense</Typography>
        </DialogTitle>
        <DialogContent sx={{ background: "" }}>
          <Grid container>
            <Grid item xs={6} sm={6}>
              <Autocomplete />
            </Grid>
            <Grid item xs={6} sm={6} sx={{display:'flex',justifyContent:'center', alignItems: 'center', paddingLeft:'15px'}}>
              <SimpleButton buttonName="Add new"   />
            </Grid>

          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={changeOpenState}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

const calculateOrderTotal = (items) => {
  const totalAmountSum = items.reduce((acc, item) => acc + item.totalAmount, 0);
  return totalAmountSum;
};
