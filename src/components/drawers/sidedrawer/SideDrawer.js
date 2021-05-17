import { Avatar, Button, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from '@material-ui/core';
import { AddCircleOutline, SubjectOutlined } from '@material-ui/icons';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useStateValue } from '../../../context/usercontext/AuthProvider';
import { logout } from '../../../auth/firebase.auth';
import { blue, green, orange } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import constants from '../../../constants/constants';


const drawerWidth=240;
const avatar={
    height:25,
    width:25,
    fontSize:12
}
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
        wanderlist:{
            backgroundColor:constants.categories['Eating Places'].color,
           ...avatar
        },
        watchlist:{
            backgroundColor:constants.categories['Watchlist'].color,
            ...avatar
        },
        todos:{
            backgroundColor:constants.categories['Todos'].color,
            ...avatar
        }

    }

})

const SideDrawer=()=>{
    const classes=useStyles()
    const history=useHistory()
    const location=useLocation()
    const [,dispatch]=useStateValue()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
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
            text:'Eating Places',
            icon: <Avatar className={classes.avatar,classes.wanderlist}>{constants.categories['Eating Places'].icon}</Avatar>
        },
        {
            text:'Watchlist',
            icon: <Avatar className={classes.avatar,classes.watchlist}>{constants.categories['Watchlist'].icon}</Avatar>
        },
        {
            text:'Todos',
            icon: <Avatar className={classes.avatar,classes.todos}>{constants.categories['Todos'].icon}</Avatar>
        }
    ]

    const drawer=(
    <>
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
    </>
    )

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return(
    <>
    {
        matches ? 
        <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{paper:classes.drawerPaper}}
    >
        {drawer}
    </Drawer>
    :
    <></>
    }
       
      </>
    )
}

export default SideDrawer;