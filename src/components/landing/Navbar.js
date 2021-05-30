import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Logo from '../../trouve-logo.png';
import { useStateValue } from '../../context/usercontext/AuthProvider';
import { googleAuthPopup } from '../../auth/firebase.auth';

const useStyles = makeStyles((theme,matches) => ({
  root: {
    // flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      padding:`0px ${theme.spacing(0)}px`,
    },
    [theme.breakpoints.up('md')]: {
      padding:`0px ${theme.spacing(17)}px`,
    },
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
    padding:'0px 0',
    justifyContent:'space-between'
}

const navLeftStyles={
    display:'flex',
    alignItems:'center',
    justifyContent:'space-evenly'
}

const GoogleIcon=()=><img src="https://img.icons8.com/fluent/48/000000/google-logo.png" style={{height:20,width:20}}/>

export default function NavBar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  const classes = useStyles(theme,matches);
  const [,dispatch]=useStateValue()
  return (
    <div className={classes.root}>
      <nav style={navStyles}>
        <div style={navLeftStyles}>
            <img src={Logo} style={{height:100,width:100}}/>
        </div>
        <div>
            <Button  
                endIcon={<GoogleIcon/>}
                className={classes.btn} 
                variant="contained" 
                color="info"
                onClick={()=>googleAuthPopup(dispatch)}
            >
                Get Started
            </Button>
        </div>
      </nav>
    </div>
  );
}
