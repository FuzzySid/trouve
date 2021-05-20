import React from 'react';
import { TextField} from '@material-ui/core';


export default function FormTextField({value,required=true,classes,handleChange,error,label,isMultiline=false,rows=1}){
    return(
        <TextField 
        value={value}
        onChange={(e)=>handleChange(e,label.toLowerCase())}
        className={classes.field}
        label={label}
        multiline={isMultiline}
        rows={rows?rows:1}
        variant="outlined"
        color="secondary"
        fullWidth
        required={required}
        error={error}
    />
    )
}