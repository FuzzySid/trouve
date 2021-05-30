import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
    KeyboardDateTimePicker,
    DateTimePicker
  } from '@material-ui/pickers';
  import 'date-fns';
  import DateFnsUtils from '@date-io/date-fns';
  import { makeStyles, TextField} from '@material-ui/core';
import { useTrouveTheme } from '../../../context/themecontext/Theme';
import { grey } from '@material-ui/core/colors';

export default function DeadlineSelector({setDeadline,deadline,category}){
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
            '& .MuiInput-underline':{
                '&:before':{
                    borderColor: theme.type==='dark' ? '#bdbdbd' : grey[500],
                },
                '&:hover':{
                    borderColor: theme.type==='dark' ? '#bdbdbd' : grey[500],
                }
            },
            color: theme.type==='dark' ? '#bdbdbd' : '#D500F9',
            borderColor:  theme.type==='dark' ? '#bdbdbd' : '#D500F9'
            }
        }
    })

    const classes=useStyles()
    return(
    <FormControl className={classes.input}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker
                variant="inline"
                margin="normal"
                id="date-picker-inline"
                label={category==='Todos' ? "Deadline" : "Due Date"}
                value={deadline}
                autoOk={true}
                onChange={(date)=>setDeadline(date)}
                KeyboardButtonProps={{
                'aria-label': 'change date',
                }}
        />
        </MuiPickersUtilsProvider>
    </FormControl>
    )
}
