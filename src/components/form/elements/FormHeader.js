import React from 'react';
import Typography from '@material-ui/core/Typography'

export default function FormHeader({classes,edit=false}){
    return(
        <Typography 
                className={classes.title}
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
               {edit ? "Edit Item" : "Create a New Item" } 
            </Typography>
    )
}