import React from 'react';

import MenuItem from './ServiceMenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
// import GridItem from '@material-ui/core/GridItem'


const useStyles = makeStyles((theme) => ({
GridItem: {
  margin: theme.spacing(8, 4),
  border: '5px solid grey',
  padding: theme.spacing(5, 8),
  borderWidth: '30px',
}
}));

function MenuServices() {
  const classes = useStyles();
  const sections = [
    {
      title: 'Web Development',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'hats'
    },
    {
      title: 'Design',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: ''
    },
    {
      title: 'Custom',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: ''
    },
    {
      title: 'Wix',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: ''
    },
    {
      title: 'WordPress',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: ''
    }
  ] 

  return (
    <>




<Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
 {/* <div className='directory-menu'> */}
        {sections.map(({ id, ...otherSectionProps }) => (
       <Grid Item className={classes.GridItem}>   <MenuItem key={id} {...otherSectionProps} /> </Grid>
        ))}
      {/* </div> */}
</Grid>
    </>
  )
}

export default MenuServices;