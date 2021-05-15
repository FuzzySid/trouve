import React,{useState} from 'react';
import Container from '@material-ui/core/Container'
import useCreateStyles from './CreateStyles';
import constants from '../../constants/constants';
import CreateForm from '../../components/form/CreateForm';
import { useStateValue } from '../../context/usercontext/AuthProvider';
import { addItem } from '../../api/firebase.db';



const Create=()=>{
    const classes=useCreateStyles();
    const [{user}]=useStateValue()

    const [item,setItem]=useState({
        title:'',
        details:''
    })
    const [error,setError]=useState(constants.initErrorState)
    const [category,setCategory]=useState('Wanderlist')
    const [deadline,setDeadline]=useState(new Date())

    const handleChange=(e,type)=>{
        setItem({...item,[type]:e.target.value})
    }

    const handleCategoryChange=(e)=>setCategory(e.target.value)
    const handleSubmit=(e)=>{
        e.preventDefault()
        setError(constants.initErrorState)
        console.log(item,category,error,deadline)
        if(item.title && item.details){
            //console.log(item.title,item.details,category,deadline)
            addItem(user.uid,{
                ...item,
                category,
                deadline
            })
        }
        else{
            setError({
                title:!item.title,
                details:!item.details
            })
        }
    }


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
            />          
        </Container>
    )
}

export default Create;