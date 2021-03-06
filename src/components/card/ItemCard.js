import { Avatar, Card, CardContent, CardHeader, Container, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import { blue, green, grey, orange, yellow } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { DeleteOutlined, MoreVertOutlined } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';
import constants from '../../constants/constants';
import {formatDistance,format} from 'date-fns'
import { useTrouveTheme } from '../../context/themecontext/Theme';

const useStyles=makeStyles((theme)=>{
   return{
    card:{
        backgroundColor:theme.type==='dark' ? '#424242' : '#FFF' ,
        color: theme.type==='dark' ? '#bdbdbd' : '#212121'

    },
    avatar:{
        backgroundColor: ({category})=>{
            return constants.categories[category].color
        }
    },
    action:{
        margin:'5px 10px'
    },
    actionItem:{
        margin:2
    },
    createdontimestamp:{
        color: grey[400],
        fontSize:10
    },
    createdontimestampGrid:{
        marginBottom:10
    },
    dueDate:{
        padding:'0 16px',

    },
    details:{
        color: theme.type==='dark' ? '#bdbdbd' : '#212121'

    }
   } 
})

export default function ItemCard({type,item,handleDelete,handleEdit, handleSave}){
    const {themeType}=useTrouveTheme()
    const classes=useStyles(item)
    return(
        <div>
            <Card elevation={1} className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatar}>
                            {constants.categories[item.category].icon}
                        </Avatar>
                    }
                    action={
                        <Grid container className={classes.action}>
                            { type!=='trash' &&
                                <Grid item className={classes.actionItem} >
                                    <Tooltip title={item.isSaved ? "Unsave" : "Save"}>
                                        <IconButton size="small" onClick={()=>handleSave(item, !item.isSaved)}>
                                        {
                                            item.isSaved ?
                                            <BookmarkIcon fontSize="small" color={themeType==='light' ? grey[800] :"primary"}/>
                                            :
                                            <BookmarkBorderIcon fontSize="small" color={themeType==='light' ? grey[800] :"primary"}/>
                                        }
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                            }
                            {
                            type!=='trash' && 
                                <Grid item className={classes.actionItem} >
                                    <Tooltip title="Edit">
                                        <IconButton size="small" onClick={()=>handleEdit(item)}>
                                            <EditIcon fontSize="small" color={themeType==='light' ? grey[800] :"primary"}/>
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                            }
                            <Grid item className={classes.actionItem} >
                                <Tooltip title={type==='trash' ? "Delete Permanently" : "Delete"}>
                                    <IconButton size="small" onClick={()=>handleDelete(item)}>
                                        <DeleteOutlined fontSize="small" color={themeType==='light' ? grey[800] :"primary"}/>
                                    </IconButton>
                                </Tooltip>
                            </Grid>

                        </Grid>
                    }
                    title={item.title}
                    subheader={<Typography variant="caption" className={classes.details}>{constants.categories[item.category].title}</Typography>}
                />
                {
                    
                    item.deadline &&
                    <Container>
                        <Typography variant="caption" >
                                {
                                    item.category==='Todos' ? 'Deadline' : 'Due'
                                } :  
                                {" "+format(
                                (item.deadline).toDate(),
                                "PPpp"
                                )}
                        </Typography>
                    </Container>

                }
                <CardContent>
                    <Typography 
                        // color="textSecondary"
                        variant="body2"
                        className={classes.dueDate}    
                    >
                        {item.details}
                    </Typography>
                </CardContent>
                <Grid container justify="center" className={classes.createdontimestampGrid}>
                    <Grid item>
                        <Typography variant="caption" className={classes.createdontimestamp}>
                            created by you 
                            {" "+formatDistance(
                            (item.timestamp).toDate(),
                            new Date(),
                            { addSuffix: true }
                            )}
                        </Typography>
                    </Grid>
                    <Grid item>

                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}