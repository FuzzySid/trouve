import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
// import classes from '*.module.css';

const useStyles = makeStyles((theme)=>{
  return{
    list: {
      width: 350,
    },
    fullList: {
      width: 'auto',
    },
    mobileDrawer:{
      // width:drawerWidth,
      width: 250,
      height:'100%',
      display:'flex',
      flexDirection:'column',
      backgroundColor: theme.type==='dark' ? '#333333' : '#fff',
      color: theme.type==='dark' ? '#bdbdbd' : '#212121'
    },
  }

});

export default function MobileDrawer({open,setOpen,drawer}) {

  const toggleDrawer = ()=> setOpen(!open)
  const classes=useStyles()

  return (
    <div>
     
        <React.Fragment key={"left"}>
          <SwipeableDrawer
            anchor={"left"}
            open={open}
            onClose={toggleDrawer}
            onOpen={toggleDrawer}
          >
            <div className={classes.mobileDrawer}>
                {drawer}
            </div>
          </SwipeableDrawer>
        </React.Fragment>
      
    </div>
  );
}
