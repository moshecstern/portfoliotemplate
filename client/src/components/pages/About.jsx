import React from 'react';
// import React, { useContext, useEffect } from 'react';
// import AuthContext from '../../context/auth/authContext';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { blue } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';

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
      large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
      },
  }));


const About = () => {
    const classes = useStyles();
    // const authContext = useContext(AuthContext);
    // useEffect(() => {
    //     authContext.loadUser();
    //     // eslint-disable-next-line
    // }, []);
  
    
    return (
        <>
        <div className={classes.root}>
        <Typography variant="h1" component="h2" className={classes.h1theme}>
  Moshe C Stern
</Typography>
<Typography variant="h1" component="h2" className={classes.h2theme}>
  Full Stack Developer
</Typography>

<Grid
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

          <Grid item>
          <Avatar alt="Moshe Stern" src="../../Images/profilepic2.JPG" className={classes.large} />
</Grid>

<Grid item>
  <Paper className={classes.paper}>Resume Link
          </Paper>
          </Grid>
    
          
         


</Grid>
        {/* </div> */}


{/* <div className={classes.root}> */}
      {/* <Grid container spacing={3}> */}
     
{/* End of 1st section */}

{/* Blurb About Me */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <h2>A Bit About Me</h2>
          <p>I'm a Full Stack Web Developer and Israeli Military veteran with a life-long dedication to learning through life experience. Effective at creative thinking and problem solving under pressure to accomplish any task. Technical training experience building live applications using Node js, Express, Mysql & MongoDB databases, React, and more. My passion is learning new technologies and understanding how to dive deep into them to create useful, working products to be used by consumers. I am excited to leverage these skills as a part of a team to build better products and experiences.</p>
          </Paper>
        </Grid>

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