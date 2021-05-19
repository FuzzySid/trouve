import React,{useEffect, useState} from 'react';
import Container from '@material-ui/core/Container'
import useCreateStyles from './CreateStyles';
import constants from '../../constants/constants';
import CreateForm from '../../components/form/CreateForm';
import { useStateValue } from '../../context/usercontext/AuthProvider';
import { addItem } from '../../api/firebase.db';
import {useSnackbar} from 'notistack';



const Create=()=>{
    
    const { enqueueSnackbar }=useSnackbar()
    const classes=useCreateStyles();
    const [{user}]=useStateValue()

    const [item,setItem]=useState({
        title:'',
        details:''
    })

    const [error,setError]=useState(constants.initErrorState)
    const [category,setCategory]=useState('Todos')
    const [deadline,setDeadline]=useState(new Date())
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
            let itemObject={
                ...item,
                category,
            }
            if(category==='Todos') itemObject.deadline=deadline;
            const response=await addItem(user.uid,itemObject)
            if(response.error) setStatus('error')
            else{
                 setStatus('success');
                 enqueueSnackbar('New item added!', { variant:'success' });
                 //history.push('/')
                 setItem({title:'',details:''});
                 setCategory('Wanderlist');
                 setDeadline(new Date())
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

    return(
            <Container>
                <CreateForm
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

export default Create;