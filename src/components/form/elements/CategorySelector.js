import React from 'react';
import Typography from '@material-ui/core/Typography';
import {FormControlLabel, FormLabel} from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import constants from '../../../constants/constants';

export default function CategorySelector({category,handleCategoryChange,classes}){
    return(
        <>
            <Typography>Category</Typography>
            <FormControl className={classes.field}>
                <RadioGroup onChange={handleCategoryChange} value={category}>
                    {
                        Object.keys(constants.categories).map(category=>
                            <FormControlLabel control={<Radio className={classes.places} /> } label={category} value={category}></FormControlLabel>
                        )
                    }
                </RadioGroup>
            </FormControl>
        </>
    )
}