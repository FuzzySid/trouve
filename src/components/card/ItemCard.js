import { Avatar, Card, CardContent, CardHeader, IconButton, makeStyles, Typography } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { DeleteOutlined, MoreVertOutlined } from '@material-ui/icons';
import React from 'react';

const useStyles=makeStyles({
    avatar:{
        backgroundColor: (item)=>{
            return blue[500]
        }
    }
})

export default function ItemCard({item,handleDelete=()=>{}}){
    const classes=useStyles(item)
    return(
        <div>
            <Card elevation={1}>
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatar}>
                            {item.category[0].toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <IconButton onClick={()=>handleDelete(item)}>
                            <DeleteOutlined/>
                        </IconButton>
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