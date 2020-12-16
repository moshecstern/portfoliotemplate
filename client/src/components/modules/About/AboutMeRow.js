import React from 'react';
// import React, { useContext, useEffect } from 'react';
// import AuthContext from '../../context/auth/authContext';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import H2 from '../layout/H2';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    //   background image: max height 700 px
    // width: '100%',
    // textAlign: 'center',
    // maxWidth: 500,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      },
      container: {
        margin: theme.spacing(8, 45),
        textAlign: 'center',
        // alignContent: 'center',
        // maxWidth: 500,
      }
  }));

  const AboutMeRow = props => {
    const classes = useStyles();

return (
  // <div className={classes.root}>
  <Grid container>
  <Grid item xs={12} className={classes.container}>
  {/* <Paper className={classes.paper}> */}
  <Typography variant="body1" gutterBottom>
    {props.body1}
    </Typography>   
     {/* </Paper> */}
</Grid>
</Grid>
// </div>
)
  }
export default AboutMeRow;
