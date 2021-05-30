import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 400,
    margin: theme.spacing(1),
    backgroundColor:theme.type==='dark' ? '#424242' : '#FFF' ,
  },
  media: {
    height: 190,
  },
  description:{
     margin: theme.spacing(2),
     height: 120,
  },
  timestamp:{
      margin:'0 auto'
  }

}));

export default function SkeletonCard(props) {
  const { loading = true } = props;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Skeleton animation="wave" variant="circle" width={60} height={60} />}
        action={null}
        title={<Skeleton animation="wave" height={15} width="60%" style={{ marginBottom: 6 }} />}
        subheader={<Skeleton animation="wave" height={12} width="30%" /> }
      />
      <Skeleton animation="wave" variant="rect" className={classes.description}/>
      <CardContent >
          <>
            <Skeleton animation="wave" height={5} width="80%" className={classes.timestamp}/>
          </>
      </CardContent>
    </Card>
  );
}

SkeletonCard.propTypes = {
  loading: PropTypes.bool,
};
