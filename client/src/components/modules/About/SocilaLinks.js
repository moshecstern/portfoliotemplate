import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

// Need to insert the links

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  const SocialLinks = () => {
    const classes = useStyles();





    return(
        <>

<div className={classes.root}>
      <Avatar>
        <GitHubIcon />
      </Avatar>
      <Avatar>
        <LinkedInIcon />
      </Avatar>
      <Avatar>
        <FacebookIcon />
      </Avatar>
    </div>
 



        </>
    )
  }

export default SocialLinks;