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
import Skills from '../modules/About/Skills';
import Experience from '../modules/About/Experience'
import ClientsPast from '../modules/About/ClientsPast';
import Contact from './Contact';
import H2 from '../modules/layout/H2';

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
        // padding: theme.spacing(2),
        margin: theme.spacing(8, 2),
        // textAlign: 'center',
        // color: theme.palette.text.secondary,
        // backgroundColor: 'blue',
      },
      Homerow: {
        // padding: theme.spacing(2),
        // backgroundImage: 'images/homepagebackground.jpg',
        backgroundImage: 'url(images/homepagebackground.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: '0 0 2em 0',
        padding: 0,
        border: 0,
        verticalAlign: 'baseline',
        // display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'space-between',
		boxShadow: 'inset -0.25em 0 0.25em 0 rgba(0, 0, 0, 0.1)',
		color: '#fff',
		// height: '100%',
		// left: 0,
		overflowY: 'auto',
		// position: 'fixed',
		// textAlign: 'right',
		top: 0,
        

        // height: '50vh',
        // borderRadius: '50%',
      },
      paperimage: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
  }));


const Homepage = props => {
    const classes = useStyles();
    // const authContext = useContext(AuthContext);
    // useEffect(() => {
    //     authContext.loadUser();
    //     // eslint-disable-next-line
    // }, []);
  
    
    return (
        <>
        
        <div className={classes.root}>
        <div className={classes.Homerow}>
        {/* add image and make background around header */}
        <HeaderAbout title={'Moshe C Stern'} H2={'Full Stack Developer'} />
</div>
        {/* <div className={classes.onerow}> */}
        {/* <Typography variant="h1" component="h2" className={classes.h1theme}>
  Moshe C Stern
</Typography>
<Typography variant="h1" component="h2" className={classes.h2theme}>
  Full Stack Developer
</Typography> */}



<ProfileimgRow Links={""} IMG={'IMGProfile'} Resume={""}   />
 {/* </div> */}

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
<div className={classes.onerow}>
{/* Blurb About Me */}
<H2 title={'About Me'} />
     <AboutMeRow body1={"I'm a Full Stack Web Developer and Israeli Military veteran with a life-long dedication to learning through life experience. Effective at creative thinking and problem solving under pressure to accomplish any task. Technical training experience building live applications using Node js, Express, Mysql & MongoDB databases, React, and more. My passion is learning new technologies and understanding how to dive deep into them to create useful, working products to be used by consumers. I am excited to leverage these skills as a part of a team to build better products and experiences."}/>
     
</div>
{/* Education */}
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>Input Education</Paper>
        </Grid> */}

{/* Expeirence */}
{/* <Grid item xs={12}>
          <Paper className={classes.paper}>Input Experience</Paper>
        </Grid> */}

{/* Past Clients */}
<div className={classes.onerow}>
<ClientsPast />
</div>
{/* Past Projects */}
<div className={classes.onerow}>
<Experience />
</div>
{/* Skills */}
<div className={classes.onerow}>
<Skills />
</div>
{/* Contact (put in footer) */}
<div className={classes.onerow}>
<Contact />
</div>
      {/* </Grid> */}
    </div>

</>
)
}
export default Homepage;