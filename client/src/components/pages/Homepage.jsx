import React from 'react';
// import React, { useContext, useEffect } from 'react';
// import AuthContext from '../../context/auth/authContext';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// import {Link} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
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
  }));

const HomePage = () => {
    const classes = useStyles();
    // const authContext = useContext(AuthContext);

    // useEffect(() => {
    //     authContext.loadUser();
    //     // eslint-disable-next-line
    // }, []);

    
    return (
        <>
<div>
    
{/* use history to update dom to switch to new page */}
{/* <button onClick={()=> props.history.push('/about')}>About</button> */}
{/* end example */}

<div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <Paper className={classes.onerow}>
            <h2>Welcome Home Page</h2>
            <p>Full Stack Developer</p>
       {/* <button>My Projects</button> */}
            </Paper>
        </Grid>

{/* Logos */}
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>social media links/ logos
          
          </Paper>
        </Grid>

{/* Profile Image */}
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>Profile Image
          
          </Paper>
        </Grid>
{/* Resume Link */}
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>Resume Link
          
          </Paper>
        </Grid>

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

      </Grid>
    </div>








</div>
</>
)
}
export default HomePage;