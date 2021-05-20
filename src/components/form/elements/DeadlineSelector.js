import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import 'date-fns';
  import DateFnsUtils from '@date-io/date-fns';

export default function DeadlineSelector({classes,setDeadline,deadline,category}){
    return(
    <FormControl className={classes.field}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
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
