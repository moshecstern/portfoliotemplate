import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';





const useStyles = makeStyles((theme) => ({
    h1theme: {
        color: theme.palette.secondary.dark,
        paddingLeft: 40,
        margin: 15,
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
          fontSize: 50,
        }
      },
      h2theme: {
        color: theme.palette.secondary.dark,
        // paddingLeft: 40,
        margin: 15,
        marginLeft: '25%',
        marginRight: '25%',
        // paddingRight: 40,
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
          fontSize: 38,
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
        <Typography variant="h1" component="h2" className={classes.h1theme}>
    {/* Moshe C Stern */}
    {props.title}
    </Typography>
    <Typography variant="h1" component="h2" className={classes.h2theme}>
    {/* Full Stack Developer */}
    {props.H2}
    </Typography>

</>
)
}
