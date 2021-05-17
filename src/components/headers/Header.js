import { AppBar, Avatar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import {format} from 'date-fns';
import { useStateValue } from '../../context/usercontext/AuthProvider';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles=makeStyles((theme,matches)=>{
    return{
        appbar:{
            //width: matches ? 'calc(100% - 240px)' : '100%'
        },
        date:{
            flexGrow:1
        },
        avatar:{
            marginLeft: theme.spacing(2)
        }
    }

})

const Header=()=>{
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const classes=useStyles(theme,matches);
    console.log({matches})
    const [{user}]=useStateValue()
    return(
        <AppBar elevation={0} className={classes.appbar} style={{width: matches ? 'calc(100% - 240px)' : '100%'}}>
            <Toolbar>
                <Typography className={classes.date}>
                    {format(new Date(),'do MMMM Y')}
                </Typography>
                <Typography>
                    {user?.displayName}
                </Typography>
                <Avatar 
                    className={classes.avatar} 
                    src={user?.photoURL} />
            </Toolbar>
        </AppBar>
    )
}

export default Header;