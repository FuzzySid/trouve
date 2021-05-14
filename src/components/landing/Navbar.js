import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    padding:'0 100px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
  },
  link:{
      margin:'0 20px'
  },
  btn:{
      borderRadius:'50px',
      textTransform:'none',
      '&:hover':{
        backgroundColor:'white'
      }
  },
  iconColor:{
      color:'#9C69E2'
  }
}));

const navStyles={
    display:'flex',
    alignItems:'center',
    margin:'0 0px',
    padding:'20px 0',
    justifyContent:'space-between'
}

const navLeftStyles={
    display:'flex',
    alignItems:'center',
    justifyContent:'space-evenly'
}

const GoogleIcon=()=><img src="https://img.icons8.com/fluent/48/000000/google-logo.png" style={{height:20,width:20}}/>

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <nav style={navStyles}>
        <div style={navLeftStyles}>
            <Typography className={classes.link}>Made with ❤ by FuzzySid</Typography>
            {/* <Typography className={classes.link}>Help</Typography>
            <Typography className={classes.link}>Features</Typography> */}
        </div>
        <div>
            <Button  
                //startIcon={<GoogleIcon/>}
                // endIcon={<ArrowForwardIcon className={classes.iconColor} fontSize="small" />} 
                endIcon={<GoogleIcon/>}
                className={classes.btn} 
                variant="contained" 
                color="primary"
            >
                Get Started
            </Button>
        </div>
      </nav>
    </div>
  );
}
