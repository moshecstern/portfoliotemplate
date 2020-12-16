import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import IMGProfile from '../../Images/profilepic2.JPG';
// import HeaderAbout from '../modules/About/Header';
import SocialLinks from './SocilaLinks';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    image: {
        // backgroundImage: 'url(https://source.unsplash.com/random)',
        // backgroundImage: 'url(images/profilepic2.JPG)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '50vh',
        borderRadius: '50%',
        // margin: '3%'
      },
  }));

const ProfileimgRow = props => {
    const classes = useStyles();


return(
  <Grid container spacing={10}
   justify="center"
  alignItems="center"
  alignContent="space-between"
  >
{/* <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
  alignContent="space-between"
> */}
<Grid item>
  {/* <Paper className={classes.paper}
  
  >social media links/ logos
          </Paper> */}
          <SocialLinks />

          </Grid>

          {/* <Grid item> */}
          {/* <Avatar alt="Moshe Stern" src="../../Images/profilepic2.JPG" className={classes.large} />
</Grid> */}
{/* <Grid item xs={false} sm={4} md={6}> */}
<Grid item>
<img className={classes.image} alt="Profile Image" src="images/profilepic2.JPG" />
</Grid>

<Grid item>
  {/* <Paper className={classes.paper}>Resume Link
          </Paper> */}
<Link>Resume</Link>
          </Grid>
    
          
         


 </Grid>

 )
}
export default ProfileimgRow