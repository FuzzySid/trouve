import { makeStyles } from '@material-ui/core';
import React from 'react';
import SideDrawer from '../drawers/sidedrawer/SideDrawer';
import Header from '../headers/Header';

const useStyles=makeStyles((theme)=>{
    return{
        root:{
            display:'flex'
        },
        authenticatedPage:{
            background:'#f9f9f9',
            width:'100%',
            padding:theme.spacing(3)
        },
        toolbar:theme.mixins.toolbar
    }
})

export default function Layout({children}){
    const classes=useStyles()
    return(
        <div className={classes.root}>
            <Header/>
            <SideDrawer/>
            <div className={classes.authenticatedPage}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}