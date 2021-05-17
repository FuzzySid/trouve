import { blue, green, lime, orange, red, teal } from '@material-ui/core/colors';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import MovieIcon from '@material-ui/icons/Movie';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';

export default{
    initErrorState:{
        title:false,
        details:false
    },
    categories:{
        'Eating Places' :{
            id:1,
            title: 'Eatling Places',
            icon: <FastfoodIcon fontSize="small"/>,
            color: orange[500],
        },
        'Watchlist' :{
            id:2,
            title: 'Watchlist',
            icon: <MovieIcon fontSize="small"/>,
            color: green[500],
        },
        'Todos' :{
            id:1,
            title: 'Todos',
            icon: <PlaylistAddCheckIcon fontSize="small"/>,
            color:blue[500],
        },
    }
}