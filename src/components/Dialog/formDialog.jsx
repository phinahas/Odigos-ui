import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({openState=false,closeFn,title="Dialog Title",dialogContent,textFieldType,textFieldLabel,onChangeTextfield,formSubmtFn}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <Dialog open={openState} onClose={closeFn}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {dialogContent}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={textFieldLabel}
            type={textFieldType}
            fullWidth
            variant="standard"
            onChange ={(e)=>onChangeTextfield(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeFn}>Cancel</Button>
          <Button onClick={formSubmtFn}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
