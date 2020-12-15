import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Typography,
  // Button,
  // Fade,
  // Modal,
  // Backdrop,
  // TextField,
  // IconButton,
  // Collapse,
  // CardActions,
  CardContent,
  CardMedia,
  CardHeader,
  Card,
  // Avatar,
  // ListItemText,
  Link
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    height: '100%',
    textAlign: 'center',
    // backgroundColor: theme.palette.secondary.main,
    borderStyle: 'solid',
    border: 1,
    borderWidth: 'thick',
    borderColor : theme.palette.secondary.main
    // maxWidth: 100
  },
  bullet: {
    // display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    // fontSize: 14,
    color: theme.palette.secondary.dark,
    [theme.breakpoints.down('md')]: {
      fontSize: 28,
      // textAlign: 'justify'
  }
  },
  pos: {
    marginBottom: 12,
  },
  theming: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
      // textAlign: 'justify'
  }
  },
footer: {
  fontSize: 25,
  [theme.breakpoints.down('md')]: {
    fontSize: 15,
    // textAlign: 'justify'
}
},
item: {
  borderStyle: 'solid',
    border: 1,
    borderWidth: 'thick',
    borderColor : theme.palette.secondary.main,

    '&: header': {
      background: '#fff',
			margin: 0,
			padding: '1em 0 1em 0',
			fontSize: '0.8em',
    },

  boxShadow: '0 0.05em 0.15em 0 rgba(0, 0, 0, 0.05)',
  marginBottom: '40px',
  [theme.breakpoints.down('md')]:{
  marginBottom: '20px',
  },
  [theme.breakpoints.down('md')]:{
    marginBottom: '15px'
  }
}
}));

const CardProject = props => {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.item}>
    
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
    {props.title}
        </Typography> */}
        {/* <br />
        <Typography variant="subtitle1" component="h2" className={classes.title}>
        {props.title}
        </Typography> */}
        <CardHeader
      // copy avatar att to makethemes above before using
        // avatar={
        //   <Avatar aria-label="recipe" className={classes.avatar}>
        //     R
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // } 
           
        title={
          <Typography gutterBottom variant="subtitle1" component="h2" className={classes.title}>
            {props.title}
            {/* <Divider variant="middle" className={classes.devidertheme}/> */}
            {/* <Divider classes={{root: classes.dividerColor}} /> */}
         </Typography>
        }
        // subheader={
        //   <Typography gutterBottom variant="subtitle2" className={classes.title}>
        //     {props.title}
        //  </Typography>
        // } 
     
      />
        <CardMedia
        className={classes.media}
        image={props.image}
        title={props.title}
        
      />
        <CardContent >
            <Typography variant="subtitle2" component="p" className={classes.theming}>
          {props.main}
          <br />
          {props.main2}
          </Typography>
          
          <br />
          <Link href={props.link1} target="_blank" rel="noopener">
          <Typography className={classes.footer} variant="body2" color="textSecondary" gutterBottom>
          {props.link1}
        </Typography>
        </Link>
        <Link href={props.link2} target="_blank" rel="noopener">
        <Typography className={classes.footer} variant="body2" color="textSecondary" gutterBottom>
          {props.link2}
        </Typography>
        </Link>
        {/* <Typography className={classes.pos} color="textSecondary">
          {props.link2}
        </Typography> */}
        {/* </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
export default CardProject;