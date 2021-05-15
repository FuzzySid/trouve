import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import ItemCard from '../../components/card/ItemCard';

const Notes=()=>{
    const handleDelete=async(item)=>{
        console.log('delete',item)
    }
    return(
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3} lg={4} >
                    <ItemCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={4}>
                    <ItemCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={4}>
                    <ItemCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={4}>
                    <ItemCard/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Notes;