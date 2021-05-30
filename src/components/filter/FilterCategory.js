import React,{useState} from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Avatar, IconButton, List, ListItem, ListItemText,ListItemIcon, Button } from '@material-ui/core';
import Modal from '../modal/Modal';
import constants from '../../constants/constants';
import { useTrouveTheme } from '../../context/themecontext/Theme';
import { grey } from '@material-ui/core/colors';


export const FilterCategory=({handleSort,selectedCategories,setSelectedCategories})=>{
    const {themeType}=useTrouveTheme()
    const [openFilterModal,setOpenFilterModal]=useState(false);
    const [categories,setCategories]=useState(Object.keys(constants.categories))
    const handleSelect=(category)=>{
        const isCategorySelected=selectedCategories.includes(category);
        if(isCategorySelected){
            //remove it
            setSelectedCategories(selectedCategories.filter(selectedCategory=>selectedCategory!==category))
        }else{
            //add it
            setSelectedCategories([...selectedCategories,category])
        }
    }
    const applyFilters=()=>{
        setOpenFilterModal(false);
        handleSort();
    }
    return(
        <div>
            <Tooltip title="Filter By Category" placement="left">
                <IconButton onClick={()=>setOpenFilterModal(true)}><FilterListIcon color={themeType==='light' ? grey[800] :"primary"}/></IconButton>
            </Tooltip>
            <Modal 
                open={openFilterModal}
                setOpen={setOpenFilterModal}
                title={'Filter By Category'}
            >
                <List>
                    {
                        categories.map(category=>
                            <ListItem
                                key={category}
                                button
                                onClick={()=>handleSelect(category)}
                            >
                            <ListItemIcon><Avatar style={{backgroundColor:selectedCategories.includes(category) ? constants.categories[category].color :'#BDBDBD'}}>{constants.categories[category].icon}</Avatar></ListItemIcon>
                            <ListItemText style={{color:selectedCategories.includes(category) ? constants.categories[category].color :'black'}} primary={constants.categories[category].title}/>
                            </ListItem>
                        )
                    }
                </List>
                <div style={{
                    textAlign:'center',
                    margin:'20px 0px'
                }}>
                    <Button 
                            variant="contained" 
                            size="small" 
                            color="secondary"
                            onClick={applyFilters}
                        >
                            Apply
                        </Button>
                </div>
            </Modal>
        </div>
    )
}