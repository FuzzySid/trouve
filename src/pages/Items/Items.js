import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import ItemCard from '../../components/card/ItemCard';
import { useStateValue } from '../../context/usercontext/AuthProvider';
import { deleteItem, getAllItems } from '../../api/firebase.db';
import Masonry from 'react-masonry-css';
import Toast from '../../components/snackbars/Toast';
import { SnackbarProvider, useSnackbar } from 'notistack';
import Layout from '../../components/layout/Layout';
import { useHistory } from 'react-router';
import ItemsSkeleton from '../../components/loaders/skeletons/ItemsSkeleton';
import SkeletonCard from '../../components/loaders/skeletons/SkeletonCard';

const Items=()=>{
    const history=useHistory();
    const [loading,setLoading]=useState(true);
    const { enqueueSnackbar } = useSnackbar();
    const [{user}]=useStateValue();
    const [items,setItems]=useState([]);
    const [searchedItems,setSearchedItems]=useState();


    const handleDelete=async(item)=>{
        const response=await deleteItem(user.uid,item.id,item.category)
        setItems(items.filter(_item=>_item.id!==item.id))
        enqueueSnackbar('This item has been deleted successfully!', { variant:'success' });
    }

    const handleEdit=async(item)=>{
        history.push('/edit',{
            data:item
        })
    }

    const handleSortAndFilter=async(sortBy,sortOrder,filterBy=[])=>{
        if(!loading) setLoading(true);
        const _sortedItems=await getAllItems(user.uid,[sortBy,sortOrder],filterBy)
        setItems(_sortedItems)
        setLoading(false);
    }

    useEffect(async()=>{
        if(!loading) setLoading(true);
        const _items=await getAllItems(user.uid)
        setItems(_items)        
        setLoading(false)
    },[])

    const handleSearch=(searchQuery)=>{
        if(!searchQuery){
            setSearchedItems()
            return;
        }
        setSearchedItems(
            items.filter(item=>item.title.toLowerCase().includes(searchQuery.toLowerCase()))
        )
    }

    const breakpoints={
        default:3,
        1600:3,
        1100:2,
        700:1
    }

    return(
        <Layout handleSort={handleSortAndFilter} handleSearch={handleSearch}>
            <Container>
                <div style={{height:80}}></div>
                
                    <Masonry
                    breakpointCols={breakpoints}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {
                    loading ? [0,1,2,3,4,5].map(num=><SkeletonCard key={num.toString()}/>)
                    :
                    
                        searchedItems ? 
                        searchedItems.map(item=>                
                            <div key={item.id} >
                                <ItemCard item={item} handleDelete={handleDelete} handleEdit={handleEdit}/>
                            </div>)
                        :
                        items.map(item=>                
                        <div key={item.id} >
                            <ItemCard item={item} handleDelete={handleDelete} handleEdit={handleEdit}/>
                        </div>)
                    
                }
                </Masonry>
                
  
            </Container>
        </Layout>

    )
}

export default Items;