import React from 'react';
import Typography from '@material-ui/core/Typography';
import { FormControlLabel, makeStyles } from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import constants from '../../../constants/constants';
import { grey } from '@material-ui/core/colors';

export default function CategorySelector({category,handleCategoryChange}){

    const useStyles=makeStyles((theme)=>{
        return{
            general:{
                color: theme.type==='dark' ? '#bdbdbd' : 'grey[500]',
                borderColor:  theme.type==='dark' ? '#bdbdbd' : 'grey[500]'
            },
            themeColor:{
                color: theme.type==='dark' ? '#bdbdbd' : 'grey[500]',

            }
        }
    })

    const classes=useStyles()
    
    return(
        <>
            <Typography className={classes.themeColor}>Category</Typography>
            <FormControl className={classes.field}>
                <RadioGroup onChange={handleCategoryChange} value={category}>
                    {
                        Object.keys(constants.categories).map(category=>
                            <FormControlLabel control={<Radio className={classes.themeColor} /> } label={<span className={classes.themeColor}>{constants.categories[category].title}</span>} value={category}></FormControlLabel>
                        )
                    }
                </RadioGroup>
            </FormControl>
        </>
    )
}