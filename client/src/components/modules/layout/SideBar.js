import React from 'react';
// import React, { useContext, useEffect } from 'react';
// import AuthContext from '../../context/auth/authContext';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    //   background image: max height 700 px
    },
    header:{
        margin: '0 0 2em 0',
        padding: 0,
        border: 0,
        verticalAlign: 'baseline',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#222629 url("images/overlay.png")',
		boxShadow: 'inset -0.25em 0 0.25em 0 rgba(0, 0, 0, 0.1)',
		color: '#fff',
		height: '100%',
		left: 0,
		overflowY: 'auto',
		position: 'fixed',
		textAlign: 'right',
		top: 0,
		width: '375px',
        '&:p': {
            margin: '1em 0 0 0'
        },
        
    },
    imageLogo: {
        position: 'relative',
        margin: '0 0 0.5em 0'
    },
    row: {
        display: 'flex',
        flexWrap: 'wrap',
        boxSizing: 'border box',
        alignItems: 'stretch',
        
        // height: '20%',
        // display: 'block'
    },
    sidebar: {
        display: 'flex',
        flexGrow: 1,
        // background: '#222629 url("./images/overlay.png")',
        background: '#222629',
        flexDirection: 'culumn',
        justifyContent: 'space-between',
        color: '#fff',
        height: '100%',
        left: 0,
        boxShadow: 'inset -0.25em 0 0.25em 0 rgba(0, 0, 0, 0.1)',
        overflowY: 'auto',
        position: 'fixed',
        textAlign: 'right',
        top: 0,
        width: '375px',
        // backgroundColor: '#81918E',
        // backgroundImage: 'url("../../images/banner.jpg")',
        // padding: '10em 0',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center center'
    },
    logo: {
        position: 'relative',
        margin: '1.75em 1.5em 1.5em 1.5em',
        // minHeight: '48px',
        cursor: 'default',
        
    },
    nav: {
        listStyle: 'none',
        paddingLeft: 0,
        marginBottom: 0,

    },
    smallheader:{
        height: '150px'
    },
    navItem: {
        paddingLeft: 0,
        display: 'block',
        padding: '0.5em 1.5em 0.5em 1.5em',
        color: 'rgba(255, 255, 255, 0.5)',
        verticalAlign: 'baseline',
        textDecoration: 'none',
        outline: 0,
        border: 0,
        transition: 'none',
        '&:a':{
            position: 'relative',
            fontSize: '0.8em',
            '&:a:before': {
                position: 'absolute',
						left: 0,
						color: '#41484c',
						textAlign: 'center',
						width: '1.25em',
						lineHeight: '1.75em'
            },
            '&:a:active': {
                background: 'rgba(0, 0, 0, 0.15)',
					boxShadow: 'inset 0 0 0.25em 0 rgba(0, 0, 0, 0.125)',
					color: '#fff'
            },
            '&:a:active span:before': {
                color: '#e27689'
            }
        }
    },
    main: {
        marginLeft: '375px',
        overflow: 'hidden',
			padding: '4em 0',
			boxShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.05), inset 0 0.1em 0.1em 0 rgba(0, 0, 0, 0.025)',
			textAlign: 'center',
			// backgroundImage: 'url("images/overlay.png")'
    }
  }));

  const Sidebar = props => {
    const classes = useStyles();

    return (
        <>
<div className={classes.sidebar}>

{/* <!-- Logo --> */}
<div className={classes.logo}>
    <span className={classes.imageLogo}><img src="images/profilepic2.JPG" alt="" /></span>
    <h1 id="title">Moshe Stern</h1>
    <p>Full Stack Computer Programmer</p>
    <p>Go To <a href="/home"> My Portfolio Here </a></p>

 </div>

{/* <!-- Nav --> */}
{/* <nav id="nav"> */}
<div className={classes.nav}>
    <ul>
    {props.Links.map(link => (

        <li className={classes.navItem}>
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
  export default Sidebar;