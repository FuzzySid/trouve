import { Avatar, Button, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from '@material-ui/core';
import { AddCircleOutline, SubjectOutlined } from '@material-ui/icons';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useStateValue } from '../../../context/usercontext/AuthProvider';
import { logout } from '../../../auth/firebase.auth';

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
        },
        list:{
            flexGrow:1
        },
        avatar:{
            height:25,
            width:25,
        }

    }

})

const SideDrawer=()=>{
    const classes=useStyles()
    const history=useHistory()
    const location=useLocation()
    const [,dispatch]=useStateValue()
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
    const drawerCategory=[
        {
            text:'Wanderlist',
            icon: <Avatar className={classes.avatar} />
        },
        {
            text:'Watchlist',
            icon: <Avatar className={classes.avatar}/>
        },
        {
            text:'Todos',
            icon: <Avatar className={classes.avatar}/>
        }
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
            <List className={classes.list}>
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
                <Typography className={classes.title}>Categories</Typography>
                {drawerCategory.map(category=>(
                    <ListItem 
                        key={category.text} 
                        button
                        onClick={()=>history.push(category.path)}
                        className={location.pathname==category.path ? classes.active : null}
                    > 
                        <ListItemIcon>{category.icon}</ListItemIcon>
                        <ListItemText primary={category.text}/>
                    </ListItem>
                ))}
            </List>
            <Button
                endIcon={<ExitToAppIcon/>}
                onClick={()=>logout(dispatch)}
            >
                Logout
            </Button>
        </Drawer>
    )
}

export default SideDrawer;