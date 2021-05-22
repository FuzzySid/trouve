import { Avatar, Card, CardContent, CardHeader, Container, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import { blue, green, grey, orange, yellow } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { DeleteOutlined, MoreVertOutlined } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';
import constants from '../../constants/constants';
import {formatDistance,format} from 'date-fns'

const useStyles=makeStyles({
    avatar:{
        backgroundColor: ({category})=>{
            return constants.categories[category].color
        }
    },

    createdontimestamp:{
        color: grey[400],
        fontSize:10
    },
    createdontimestampGrid:{
        marginBottom:10
    },
    dueDate:{
        padding:'0 16px'
    }
})

export default function ItemCard({item,handleDelete,handleEdit}){
    const classes=useStyles(item)
    return(
        <div>
            <Card elevation={1}>
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatar}>
                            {constants.categories[item.category].icon}
                        </Avatar>
                    }
                    action={
                        <Grid container className={classes.action}>
                             {/* <Grid item >
                                <Tooltip title="Save">
                                    <IconButton onClick={()=>{}}>
                                        <BookmarkBorderIcon fontSize="small"/>
                                    </IconButton>
                                </Tooltip>
                            </Grid> */}
                            <Grid item >
                                <Tooltip title="Edit">
                                    <IconButton onClick={()=>handleEdit(item)}>
                                        <EditIcon fontSize="small"/>
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                            <Grid item >
                                <Tooltip title="Delete">
                                    <IconButton onClick={()=>handleDelete(item)}>
                                        <DeleteOutlined fontSize="small"/>
                                    </IconButton>
                                </Tooltip>
                            </Grid>

                        </Grid>
                    }
                    title={item.title}
                    subheader={item.category}
                />
                {
                    
                    item.deadline &&
                    <Container className={classes.dueDate}>
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
                        color="textSecondary"
                        variant="body2">
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