import React from 'react';
import Button from '@material-ui/core/Button';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

export default function FormSubmit({classes,handleSubmit,status,edit=false}){
    return(
        <Button 
        className={classes.btn}
        type="submit" 
        color="secondary" 
        variant="contained"
        onClick={handleSubmit}
        endIcon={<KeyboardArrowRightIcon/>}
        disabled={status==='loading'}
    >
       {edit  ? "Edit" : "Create"} 
    </Button>
    )
}