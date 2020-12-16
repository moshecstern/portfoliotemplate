import React from 'react';
// import React, { useContext, useEffect } from 'react';
// import AuthContext from '../../context/auth/authContext';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
    //   flexGrow: 1,
    //   background image: max height 700 px
    width: '100%',
    maxWidth: 500,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      },
  }));

  const Row1 = props => {
    const classes = useStyles();

return (
    <div className={classes.root}>
    <Grid item xs={12}>
    {/* <Paper className={classes.paper}> */}
    <Typography variant="body1" gutterBottom>
      {props.body1}
      </Typography>   
       {/* </Paper> */}
  </Grid>
  </div>
)
  }
export default Row1;