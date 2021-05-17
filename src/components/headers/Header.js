import { AppBar, Avatar, IconButton, makeStyles, fade, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import {format} from 'date-fns';
import { useStateValue } from '../../context/usercontext/AuthProvider';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ExitToAppOutlined } from '@material-ui/icons';
import {logout} from '../../auth/firebase.auth';
import SortIcon from '@material-ui/icons/Sort';
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { landingStyles } from '../landing/styles';
import { grey } from '@material-ui/core/colors';
import { useLocation } from 'react-router';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles=makeStyles((theme,matches)=>{
    return{
        appbar:{
            //width: matches ? 'calc(100% - 240px)' : '100%'
        },
        search:{
            //flexGrow:1,
            flex:0.8,
            display:'flex',
            alignItems:'center',
            backgroundColor: '#F9F9F9',
            // '&:hover': {
            // backgroundColor: grey[100],
            // },
            borderRadius:5
        },
        date:{
            flexGrow:1
        },
        avatar:{
            marginLeft: theme.spacing(2)
        },
        panel:{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between'
        },
        searchIcon:{
            marginLeft:theme.spacing(2),
            marginRight:theme.spacing(1)
        }
    }

})

const Header=()=>{
    const theme = useTheme();
    const location=useLocation();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const classes=useStyles(theme,matches);
    console.log({matches})
    const [{user},dispatch]=useStateValue()
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
                {!matches &&  <IconButton onClick={()=>logout(dispatch)}><ExitToAppOutlined/> </IconButton>}
            </Toolbar>
            {
                location.pathname==='/' && 
                <Toolbar className={classes.panel}>
                    <Tooltip title="Sort Items" placement="right">
                        <IconButton><SortIcon/></IconButton>
                    </Tooltip>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}> 
                            <SearchIcon fontSize="small"/>
                        </div>
                        <InputBase
                            placeholder="Search items by title..."
                            fullWidth
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                <div>
                <Tooltip title="Filter By Category" placement="left">
                    <IconButton><FilterListIcon/></IconButton>
                </Tooltip>
                </div>
                </Toolbar>
            }

        </AppBar>
    )
}

export default Header;