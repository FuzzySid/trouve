import { Avatar, Card, CardContent, CardHeader, Container, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import { blue, green, grey, orange, yellow } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import { DeleteOutlined, MoreVertOutlined } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';
import constants from '../../constants/constants';
import {formatDistance} from 'date-fns'

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

export default function ItemCard({item,handleDelete}){
    const classes=useStyles(item)
    console.log((item.deadline).toDate(),(item.timestamp).toDate())
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
                        <>
                        <Tooltip title="Edit">
                            <IconButton onClick={()=>{}}>
                                <EditIcon fontSize="small"/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <IconButton onClick={()=>handleDelete(item)}>
                                <DeleteOutlined fontSize="small"/>
                            </IconButton>
                        </Tooltip>

                        </>
                    }
                    title={item.title}
                    subheader={item.category}
                />
                {
                    
                    item.category==='Todos' &&
                    <Container className={classes.dueDate}>
                        <Typography variant="caption" >
                                Due :  
                                {" "+formatDistance(
                                (item.deadline).toDate(),
                                new Date(),
                                { addSuffix: true }
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