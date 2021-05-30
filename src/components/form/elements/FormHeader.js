import React from 'react';
import Typography from '@material-ui/core/Typography'
import { useTrouveTheme } from '../../../context/themecontext/Theme';

export default function FormHeader({classes,edit=false}){
    const {themeType}=useTrouveTheme()
    return(
        <Typography 
                className={classes.title}
                variant="h6"
                color={themeType==='dark' ? "primary" : "textSecondary"}
                component="h2"
                gutterBottom
            >
               {edit ? "Edit Item" : "Create a New Item" } 
            </Typography>
    )
}