import React,{useEffect, useState} from 'react';
import Container from '@material-ui/core/Container'
import useCreateStyles from '../Create/CreateStyles';
import constants from '../../constants/constants';
import CreateForm from '../../components/form/CreateForm';
import { useStateValue } from '../../context/usercontext/AuthProvider';
import { addItem, editItem } from '../../api/firebase.db';
import {useSnackbar} from 'notistack';
import { Redirect, useHistory, useLocation } from 'react-router';
import Layout from '../../components/layout/Layout';
import NotFound from '../404/404';


const Edit=()=>{
    
    const { enqueueSnackbar }=useSnackbar()
    const history=useHistory()
    const location=useLocation();
    const itemData=location?.state?.data
    const isEdit=!!itemData;  
    const classes=useCreateStyles();
    const [{user}]=useStateValue()
    const {
        title,
        details,
    }=itemData;

    const [item,setItem]=useState({
        title,
        details
    })

    const [error,setError]=useState(constants.initErrorState)
    const [category,setCategory]=useState(itemData.category)
    const [deadline,setDeadline]=useState(new Date(itemData.deadline.toDate()))
    const [status,setStatus]=useState()

    const handleChange=(e,type)=>{
        setItem({...item,[type]:e.target.value})
    }

    const handleCategoryChange=(e)=>setCategory(e.target.value)
    const handleSubmit=async(e)=>{
        if(status) return;
        e.preventDefault()
        setError(constants.initErrorState)
        if(item.title && item.details){
            //console.log(item.title,item.details,category,deadline)
            setStatus('loading')
            const response=await editItem(user.uid,{
                ...item,
                userid:user.uid,
                id:itemData.id,
                timestamp:itemData.timestamp,
                category,
                deadline
            })
            if(response?.error) setStatus('error')
            else{
                 setStatus('success');
                 enqueueSnackbar('Item Updated!', { variant:'success' });
                 history.push('/');
                //  setItem({title:'',details:''});
                //  setCategory('Wanderlist');
                //  setDeadline(new Date())
            }

        }
        else{
            setError({
                title:!item.title,
                details:!item.details
            })
        }
    }

    useEffect(()=>{
        if(status) setTimeout(()=>setStatus(),3000);
    },[status])

    if(!isEdit || !itemData) return (<Redirect to="/"/>)
    return(
            <Container>
                <CreateForm
                    edit={true}
                    item={item}
                    classes={classes}
                    handleInputChange={handleChange}
                    error={error}
                    handleSubmit={handleSubmit}
                    handleCategoryChange={handleCategoryChange}
                    category={category}
                    deadline={deadline}
                    setDeadline={setDeadline}
                    status={status}
                />          
            </Container>
    )
}

export default Edit;