import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import ItemCard from '../../components/card/ItemCard';
import { useStateValue } from '../../context/usercontext/AuthProvider';
import { deleteItem, getAllItems } from '../../api/firebase.db';
import Masonry from 'react-masonry-css';
import Toast from '../../components/snackbars/Toast';
import { SnackbarProvider, useSnackbar } from 'notistack';

const Items=()=>{
    const { enqueueSnackbar } = useSnackbar();
    const [{user}]=useStateValue();
    const [items,setItems]=useState([])
    const [status,setStatus]=useState({type:null,show:false,msg:''})

    const handleDelete=async(item)=>{
        const response=await deleteItem(user.uid,item.id,item.category)
        setItems(items.filter(_item=>_item.id!==item.id))
        enqueueSnackbar('This item has been deleted successfully!', { variant:'success' });
    }

    useEffect(async()=>{
        setItems(await getAllItems(user.uid))
    },[])

    const breakpoints={
        default:3,
        1100:2,
        700:1
    }

    return(
        <Container>
            <div style={{height:80}}></div>
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {
                    items.map(item=>                
                    <div key={item.id} >
                        <ItemCard item={item} handleDelete={handleDelete} />
                    </div>)
                }
            </Masonry>
        </Container>
    )
}

export default Items;