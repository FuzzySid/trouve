import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from '@material-ui/core';
import { AddCircleOutline, SubjectOutlined } from '@material-ui/icons';
import React from 'react';
import { useHistory, useLocation } from 'react-router';

const drawerWidth=240;

const useStyles=makeStyles((theme)=>{
    return{
        drawer:{
            width:drawerWidth
        },
        drawerPaper:{
            width:drawerWidth
        },
        active:{
            background:'#f4f4f4'
        },
        title:{
            padding:theme.spacing(2)
        }

    }

})

const SideDrawer=()=>{
    const classes=useStyles()
    const history=useHistory()
    const location=useLocation()
    const drawerItems=[
        {
            text:'Home',
            icon: <SubjectOutlined  color="secondary"/>,
            path:'/'
        },
        {
            text:'Create Item',
            icon: <AddCircleOutline color="secondary"/>,
            path:'/create'
        },
       
    ]

    return(
        <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{paper:classes.drawerPaper}}
        >
            <div>
                <Typography variant="h5" className={classes.title}>
                    Trouve
                </Typography>
            </div>
            <List>
                {drawerItems.map(draweritem=>(
                    <ListItem 
                        key={draweritem.text} 
                        button
                        onClick={()=>history.push(draweritem.path)}
                        className={location.pathname==draweritem.path ? classes.active : null}
                    > 
                        <ListItemIcon>{draweritem.icon}</ListItemIcon>
                        <ListItemText primary={draweritem.text}/>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

export default SideDrawer;