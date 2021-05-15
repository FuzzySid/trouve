import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import ItemCard from '../../components/card/ItemCard';
import { useStateValue } from '../../context/usercontext/AuthProvider';
import { getAllItems } from '../../api/firebase.db';
import Masonry from 'react-masonry-css';

const Items=()=>{
    const [{user}]=useStateValue();
    const [items,setItems]=useState([])
    const handleDelete=async(item)=>{
        console.log('delete',item)
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
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {
                    items.map(item=>                
                    <div key={item.id} >
                        <ItemCard item={item}/>
                    </div>)
                }
            </Masonry>
        </Container>
    )
}

export default Items;