import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core';

const useStyles=makeStyles((theme)=>{
  return{
   root:{
    backgroundColor: theme.type==='dark' ? '#333333' : '#F9F9F9',
    color: theme.type==='dark' ? '#bdbdbd' : '#212121'

   }
  }
})

export default function Modal({open,setOpen,title,children}) {

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes=useStyles();

  return (
    <div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        <div className={classes.root}>
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent >
            {children}
          </DialogContent>
        </div>

      </Dialog>
    </div>
  );
}