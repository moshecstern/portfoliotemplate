import React from 'react';
// import React, { useContext, useEffect } from 'react';
// import AuthContext from '../../context/auth/authContext';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    footer: {
        display: 'flex'
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
    <span 
    // className={classes.imageLogo}
    ><img src="images/profilepic2.JPG" alt="" /></span>
    <h1 id="title">Moshe Stern</h1>
    <p>Full Stack Computer Programmer</p>
    <p>Go To <a href="/home"> My Portfolio Here </a></p>

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

</div>




        </>
    )
  }
  export default Footer;