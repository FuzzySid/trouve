import { AppBar, Avatar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import {format} from 'date-fns';
import { useStateValue } from '../../context/usercontext/AuthProvider';

const useStyles=makeStyles((theme)=>{
    return{
        appbar:{
            width: 'calc(100% - 240px)'
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
    const classes=useStyles();
    const [{user}]=useStateValue()
    return(
        <AppBar elevation={0} className={classes.appbar}>
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