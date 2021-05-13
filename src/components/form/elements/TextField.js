import React from 'react';
import { TextField} from '@material-ui/core';


export default function FormTextField({classes,handleChange,error,label,isMultiline=false,rows=1}){
    return(
        <TextField 
        onChange={(e)=>handleChange(e,label.toLowerCase())}
        className={classes.field}
        label={label}
        multiline={isMultiline}
        rows={rows?rows:1}
        variant="outlined"
        color="secondary"
        fullWidth
        required
        error={error.title}
    />
    )
}