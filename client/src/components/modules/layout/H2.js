import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';





const useStyles = makeStyles((theme) => ({
   
      h2theme: {
        color: theme.palette.secondary.light,
        // color: 'white',
        // paddingLeft: 40,
        margin: 15,
        marginLeft: '25%',
        marginRight: '25%',
        // paddingRight: 40,
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
          fontSize: 32,
          marginLeft: 25,
        marginRight: 25,
        }
      },

}));

export default function HeaderAbout(props) {


// const HeaderAbout = props => {
    const classes = useStyles();
    
    
    
    return (
        <>
        <Typography variant="h2" component="h2" className={classes.h2theme}>
    {/* Moshe C Stern */}
    {props.title}
    </Typography>
    {/* <Typography variant="h2" component="h2" className={classes.h2theme}> */}
    {/* Full Stack Developer */}
    {/* {props.H2} */}
    {/* </Typography> */}

</>
)
}
