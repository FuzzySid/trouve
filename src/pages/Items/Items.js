import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import ItemCard from '../../components/card/ItemCard';
import { useStateValue } from '../../context/usercontext/AuthProvider';
import { getAllItems } from '../../api/firebase.db';

const Items=()=>{
    const [{user}]=useStateValue();
    const [items,setItems]=useState([])
    const handleDelete=async(item)=>{
        console.log('delete',item)
    }
    useEffect(async()=>{
        setItems(await getAllItems(user.uid))
    },[])
    return(
        <Container>
            <Grid container spacing={3}>
                {
                    items.map(item=>                
                    <Grid key={item.id} item xs={12} sm={6} md={3} lg={4} >
                        <ItemCard item={item}/>
                    </Grid>)
                }

                
            </Grid>
        </Container>
    )
}

export default Items;