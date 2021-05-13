import React from 'react';
import Typography from '@material-ui/core/Typography';
import {FormControlLabel, FormLabel} from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';

export default function CategorySelector({category,handleCategoryChange,classes}){
    return(
        <>
            <Typography>Category</Typography>
            <FormControl className={classes.field}>
                <RadioGroup onChange={handleCategoryChange} value={category}>
                    <FormControlLabel fullWidth={false} control={<Radio className={classes.places} /> } label="Wanderlist" value="Wanderlist"></FormControlLabel>
                    <FormControlLabel control={<Radio className={classes.watchlist} /> } label="Watchlist" value="Watchlist"></FormControlLabel>
                    <FormControlLabel control={<Radio className={classes.todos}/> } label="Todos" value="Todos"></FormControlLabel>
                </RadioGroup>
            </FormControl>
        </>
    )
}