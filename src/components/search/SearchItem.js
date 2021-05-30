import { makeStyles } from '@material-ui/core';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const useStyles=makeStyles((theme)=>{
    return{
        search:{
            //flexGrow:1,
            flex:0.8,
            display:'flex',
            alignItems:'center',
            backgroundColor: theme.type ==='dark' ? '#424242' : '#FFF',
            color: theme.type==='dark' ? '#eeeeee' : '#212121',

            // '&:hover': {
            // backgroundColor: grey[100],
            // },
            borderRadius:5
        },
        searchIcon:{
            marginLeft:theme.spacing(2),
            marginRight:theme.spacing(1),
        },
        input:{
            color: theme.type==='dark' ? '#eeeeee' : '#212121'

        }
    }

})

const SearchItem=({handleSearch})=>{
    const handleChange=(e)=>{
        const query=e.target.value;
        handleSearch(query)
    }
    const classes=useStyles()
    return(
        <div className={classes.search}>
        <div className={classes.searchIcon}> 
            <SearchIcon fontSize="small"/>
        </div>
        <InputBase
            placeholder="Search items by title..."
            fullWidth
            className={classes.input}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'search' }}
        />
    </div>
    )
}

export default SearchItem;