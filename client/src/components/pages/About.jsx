import React from 'react';
// import React, { useContext, useEffect } from 'react';
// import AuthContext from '../../context/auth/authContext';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import { blue } from '@material-ui/core/colors';
// import Typography from '@material-ui/core/Typography';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import Avatar from '@material-ui/core/Avatar';
// import IMGProfile from '../../Images/profilepic2.JPG';
import HeaderAbout from '../modules/About/Header';
import ProfileimgRow from '../modules/About/ProfileimgRow';
import AboutMeRow from '../modules/About/AboutMeRow';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    //   background image: max height 700 px
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    onerow: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: 'blue',
      },
      paperimage: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
  }));


const About = props => {
    const classes = useStyles();
    // const authContext = useContext(AuthContext);
    // useEffect(() => {
    //     authContext.loadUser();
    //     // eslint-disable-next-line
    // }, []);
  
    
    return (
        <>
        <div className={classes.root}>
        <HeaderAbout title={'Moshe C Stern'} H2={'Full Stack Developer'} />
        {/* <Typography variant="h1" component="h2" className={classes.h1theme}>
  Moshe C Stern
</Typography>
<Typography variant="h1" component="h2" className={classes.h2theme}>
  Full Stack Developer
</Typography> */}


<ProfileimgRow Links={""} IMG={'IMGProfile'} Resume={""}   />


{/* <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
<Grid item>
  <Paper className={classes.paper}
  
  >social media links/ logos
          </Paper>
          </Grid>

         
<Grid item xs={false} sm={4} md={6} className={classes.image} />

<Grid item>
  <Paper className={classes.paper}>Resume Link
          </Paper>
          </Grid>
    
          
         


</Grid> */}
        {/* </div> */}


{/* <div className={classes.root}> */}
      {/* <Grid container spacing={3}> */}
     
{/* End of 1st section */}

{/* Blurb About Me */}
     <AboutMeRow />

{/* Education */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>Input Education</Paper>
        </Grid>

{/* Expeirence */}
<Grid item xs={12}>
          <Paper className={classes.paper}>Input Experience</Paper>
        </Grid>

{/* Past Clients */}

{/* Past Projects */}

{/* Skills */}

{/* Contact (put in footer) */}

      {/* </Grid> */}
    </div>

</>
)
}
export default About;