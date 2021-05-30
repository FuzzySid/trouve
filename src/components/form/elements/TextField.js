import React from 'react';
import { makeStyles, TextField} from '@material-ui/core';
import { useTrouveTheme } from '../../../context/themecontext/Theme';
import { grey } from '@material-ui/core/colors';


export default function FormTextField({value,required=true,handleChange,error,label,isMultiline=false,rows=1}){
    
    const {themeType}=useTrouveTheme()
    
    const useStyles=makeStyles((theme)=>{
        return{
           input:{
            "& .MuiFormLabel-root": {
                color: theme.type==='dark' ? '#bdbdbd' : grey[500],
              },
            "& .MuiOutlinedInput-notchedOutline" : {
                color: theme.type==='dark' ? '#bdbdbd' : '#D500F9',

            },
            "& .MuiInputBase-root": {
                color: theme.type==='dark' ? '#bdbdbd' : 'black',
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: theme.type==='dark' ? '#bdbdbd' : grey[500],
                },
                '&:hover fieldset': {
                    borderColor: theme.type==='dark' ? '#bdbdbd' : grey[500],
                  },
                '&.Mui-focused fieldset': {
                    borderColor: theme.type==='dark' ? '#bdbdbd' : '#D500F9',
                },
               
            },
            color: theme.type==='dark' ? '#bdbdbd' : '#D500F9',
            borderColor:  theme.type==='dark' ? '#bdbdbd' : '#D500F9'
            }
        }
    })

    const classes=useStyles()
    
    return(
        <TextField 
            value={value}
            onChange={(e)=>handleChange(e,label.toLowerCase())}
            className={classes.input}
            label={label}
            multiline={isMultiline}
            rows={rows?rows:1}
            variant="outlined"
            color={themeType==='light' ? 'secondary' : 'primary'}
            fullWidth
            required={required}
            error={error}
    />
    )
}