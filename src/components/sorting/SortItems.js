import React, { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { IconButton,Typography, Button,Grid } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import Modal from '../modal/Modal';
import {FormControlLabel, FormLabel} from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import Switch from '@material-ui/core/Switch';
import { useTrouveTheme } from '../../context/themecontext/Theme';
import { grey } from '@material-ui/core/colors';



export const SortItems=({handleSort,sortBy,setSortBy,sortOrder,setSortOrder})=>{
    const [openSortModal,setOpenSortModal]=useState(false);
    const {themeType}=useTrouveTheme()

    const handleChange=(e)=>setSortBy(e.target.value)

    const applySort=()=>{
        handleSort(sortBy,sortOrder);
        setOpenSortModal(false)
    }

    return(
    <>
        <Tooltip title="Sort Items" placement="right">
            <IconButton onClick={()=>setOpenSortModal(true)}><SortIcon color={themeType==='light' ? grey[800] :"primary"}/></IconButton>
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