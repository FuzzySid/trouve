import { makeStyles } from '@material-ui/core';
import React,{useState} from 'react';
import FloatingActionButton from '../buttons/FloatingActionButton/FloatingActionButton';
import SideDrawer from '../drawers/sidedrawer/SideDrawer';
import Header from '../headers/Header';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles=makeStyles((theme)=>{
    return{
        root:{
            display:'flex'
        },
        authenticatedPage:{
            background:'#f9f9f9',
            width:'100%',
            minHeight:'100vh',
            padding:theme.spacing(3)
        },
        toolbar:theme.mixins.toolbar
    }
})

export default function Layout({children,handleSort,handleSearch}){
    const classes=useStyles()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const [showSideDrawer,setShowSideDrawer]=useState(matches);
    return(
        <div className={classes.root}>
            {!matches && <FloatingActionButton/>} 
            <Header showSideDrawer={showSideDrawer} setShowSideDrawer={setShowSideDrawer} handleSort={handleSort} handleSearch={handleSearch}/>
            <SideDrawer showSideDrawer={showSideDrawer} setShowSideDrawer={setShowSideDrawer} />
            <div className={classes.authenticatedPage}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}