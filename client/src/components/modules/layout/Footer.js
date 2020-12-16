import React from 'react';
// import React, { useContext, useEffect } from 'react';
// import AuthContext from '../../context/auth/authContext';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    footer: {
        display: 'flex',
        flexGrow: 1,
        position: 'relative',
        boxShadow: 'inset -0.25em 0 0.25em 0 rgba(0, 0, 0, 0.1)',
        background: '#222629',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: '1.75em 1.5em 1.5em 1.5em',
    },
    imageLogo: {
        position: 'relative',
        margin: '0 0 0.5em 0',
        width: '55px',
        height: '55px'
    },
    H1: {
        position: 'relative',
			color: '#fff',
			fontWeight: 600,
			fontSize: '1em',
			lineHeight: '1em'
    },
    P: {
        position: 'relative',
			display: 'block',
			fontSize: '0.8em',
			color: 'rgba(255, 255, 255, 0.5)',
			lineHeight: '1.25em',
			margin: '0.5em 0 0 0'
    }
  }));

  const Footer = props => {
    const classes = useStyles();

    return (
        <>
<div 
className={classes.footer}
>

{/* <!-- Logo --> */}
<div 
// className={classes.logo}
>
    
    
    <img className={classes.imageLogo} src="images/profilepic2.JPG" alt="" />
    <h1 className={classes.H1} id="title">Moshe Stern</h1>
    <p className={classes.P}>Full Stack Computer Programmer</p>
    {/* <p className={classes.P}>Go To <a href="/home"> My Portfolio Here </a></p> */}

 </div>

{/* <!-- Nav --> */}
{/* <nav id="nav"> */}
<div 
// className={classes.nav}
>
    <ul>
    {props.Links.map(link => (

        <li 
        // className={classes.navItem}
        >
        <a href={link.link}>{link.linkName}
        </a>
        </li>

    ))}
{/* // </div> */}
</ul>
</div>
{/* SecondaryLinks */}
<div 
// className={classes.nav}
>
    <ul>
    {props.SecondaryLinks.map(link => (

        <li 
        // className={classes.navItem}
        >
        <a href={link.link}>{link.linkName}
        </a>
        </li>

    ))}
{/* // </div> */}
</ul>
</div>
</div>




        </>
    )
  }
  export default Footer;