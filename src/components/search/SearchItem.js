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
            backgroundColor: '#F9F9F9',
            // '&:hover': {
            // backgroundColor: grey[100],
            // },
            borderRadius:5
        },
        searchIcon:{
            marginLeft:theme.spacing(2),
            marginRight:theme.spacing(1)
        }
    }

})

const SearchItem=()=>{
    const classes=useStyles()
    return(
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
    )
}

export default SearchItem;