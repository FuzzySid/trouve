import React from 'react';
import Typography from '@material-ui/core/Typography'

export default function FormHeader({classes}){
    return(
        <Typography 
                className={classes.title}
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                Create a New Item
            </Typography>
    )
}