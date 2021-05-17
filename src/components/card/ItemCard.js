import { Avatar, Card, CardContent, CardHeader, IconButton, makeStyles, Typography } from '@material-ui/core';
import { blue, green, orange, yellow } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import { DeleteOutlined, MoreVertOutlined } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';
import constants from '../../constants/constants';

const useStyles=makeStyles({
    avatar:{
        backgroundColor: ({category})=>{
            return constants.categories[category].color
        }
    }
})

export default function ItemCard({item,handleDelete}){
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
                <CardContent>
                    <Typography 
                        color="textSecondary"
                        variant="body2">
                        {item.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}