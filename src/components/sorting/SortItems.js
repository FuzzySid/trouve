import React, { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { AppBar, Avatar, IconButton, makeStyles, fade, Toolbar, Typography, Button, withStyles, Grid } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import Modal from '../modal/Modal';
import {FormControlLabel, FormLabel} from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import Switch from '@material-ui/core/Switch';


const AntSwitch = withStyles((theme) => ({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }))(Switch);

export const SortItems=({handleSort})=>{
    const [openSortModal,setOpenSortModal]=useState(false);
    const [sortBy,setSortBy]=useState('timestamp')
    const [sortOrder,setSortOrder]=useState('desc')

    const handleChange=(e)=>setSortBy(e.target.value)

    const applySort=()=>{
        handleSort(sortBy,sortOrder);
        setOpenSortModal(false)
    }

    return(
    <>
        <Tooltip title="Sort Items" placement="right">
            <IconButton onClick={()=>setOpenSortModal(true)}><SortIcon/></IconButton>
        </Tooltip>
            <Modal
                open={openSortModal}
                setOpen={setOpenSortModal}
                title={"Sort Items"}
            >
                
               <Grid component="label" container alignItems="center" spacing={1} justify="center">
                    <Grid item><Typography>ASC</Typography></Grid>
                    <Grid item>
                        <Switch
                                checked={sortOrder==='desc'}
                                onChange={()=>setSortOrder(sortOrder==='asc' ? 'desc' : 'asc')}
                                name="checkedA"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />                    
                    </Grid>
                    <Grid item><Typography>DESC</Typography></Grid>
               </Grid>
 


                <FormControl >
                    <RadioGroup onChange={handleChange} value={sortBy}>
                        <FormControlLabel control={<Radio /> } label={"Date an item was created"} value={"timestamp"}></FormControlLabel>
                         <FormControlLabel control={<Radio /> } label={"Due Date or Deadline"} value={"deadline"}></FormControlLabel>
                         <FormControlLabel control={<Radio /> } label={"Alphabetically by Title"} value={"title"}></FormControlLabel>
                    </RadioGroup>
                </FormControl>
                <div style={{
                    textAlign:'center',
                    margin:'20px 0px'
                }}>
                        <Button
                            variant="contained" 
                            size="small" 
                            color="secondary"
                            onClick={applySort}
                        >
                            Apply
                        </Button>
                </div>
            </Modal>
        
    </>
    )
}