import { AppBar, Avatar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React,{useState} from 'react';
import {format} from 'date-fns';
import { useStateValue } from '../../context/usercontext/AuthProvider';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ExitToAppOutlined } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import {logout} from '../../auth/firebase.auth';
import { useHistory, useLocation } from 'react-router';
import { FilterCategory } from '../filter/FilterCategory';
import { SortItems } from '../sorting/SortItems';
import SearchItem from '../search/SearchItem';
import constants from '../../constants/constants';

const useStyles=makeStyles((theme,matches)=>{
    return{
        appbar:{
            //width: matches ? 'calc(100% - 240px)' : '100%'
        },
        search:{
            //flexGrow:1,
            flex:0.9,
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
            marginLeft:theme.spacing(1),
            marginRight:theme.spacing(1)
        }
    }

})

const Header=({
    handleSort,
    handleSearch, 
    showSideDrawer,
    setShowSideDrawer
})=>{
    const theme = useTheme();
    const location=useLocation();
    const history=useHistory()
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const classes=useStyles(theme,matches);
    const [{user},dispatch]=useStateValue()

    const [sortBy,setSortBy]=useState('timestamp')
    const [sortOrder,setSortOrder]=useState('desc')
    const [selectedCategories,setSelectedCategories]=useState(Object.keys(constants.categories))

    const handleOpenSideDrawer=()=>{
        setShowSideDrawer(true);
    }

    const callSort=()=>{
        handleSort(sortBy,sortOrder,selectedCategories)
    }
    
    return(
        <AppBar elevation={0} className={classes.appbar} style={{width: matches ? 'calc(100% - 240px)' : '100%'}}>
            <Toolbar className={classes.panel}>
                {!matches &&  <IconButton style={{color: 'rgba(0, 0, 0, 0.87)'}} onClick={handleOpenSideDrawer}><MenuIcon/> </IconButton>}
                {
                matches &&
                    <Typography className={classes.date}>
                        {format(new Date(),'do MMMM Y')}
                    </Typography>
                }
                <div className={classes.panel}>
                    <Typography>
                        {user?.displayName}
                    </Typography>
                    <Avatar 
                        className={classes.avatar} 
                        src={user?.photoURL} />
                </div>

            </Toolbar>
            {
                (location.pathname==='/' || location.pathname==='/saved' ) && 
                <Toolbar className={classes.panel}>
                    <SortItems 
                        handleSort={callSort} 
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                        sortOrder={sortOrder}
                        setSortOrder={setSortOrder}
                    />
                    <SearchItem handleSearch={handleSearch}/>
                   <FilterCategory 
                        handleSort={callSort}
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                    />
                </Toolbar>
            }

        </AppBar>
    )
}

export default Header;