import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { useHistory, useLocation } from 'react-router';
import HomeIcon from '@material-ui/icons/Home';
import { purple,blue,indigo } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
   primary: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 3,
        // backgroundColor: blue[500],
        // color:'#fff',
        // '&$hover':{
        //     backgroundColor:'red',
        //     color:'black'
        // }
    },
  }));

const FloatingActionButton=({
})=>{
    const classes=useStyles()
    const location=useLocation()
    const history=useHistory()
    const handleRedirect=()=>{
        history.push(location.pathname==='/' ? '/create' : '/')
    }
    return(
        <Fab onClick={handleRedirect} className={classes.primary} color="secondary" >
            { location.pathname==='/' ?  <AddIcon /> : <HomeIcon /> }
      </Fab>
    )
}

export default FloatingActionButton;