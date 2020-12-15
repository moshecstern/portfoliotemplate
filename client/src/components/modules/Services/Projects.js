import React from 'react';
// import React, { useContext, useEffect } from 'react';
// import AuthContext from '../../context/auth/authContext';
import { makeStyles } from '@material-ui/core/styles';
import CardProject from '../layout/CardProject';
import Grid from '@material-ui/core/Grid';

import H2 from '../layout/H2';
import SideBar from '../layout/SideBar';


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
        // marginLeft: '375px',
        overflow: 'hidden',
			padding: '4em 0',
			boxShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.05), inset 0 0.1em 0.1em 0 rgba(0, 0, 0, 0.025)',
			textAlign: 'center',
			// backgroundImage: 'url("images/overlay.png")'
    }
  }));

  const Projects = props => {
    const classes = useStyles();

const Projects = [
    {
        title:'Graphic Know-vel',
        role: 'MERN',
        date: 'Oct 19',
        main: 'Graphic Know-vels is an application to help graphic novel readers navigate, explore, annote, and save personal collections of these novels.',
        main2:'React, React-Hooks, Mongodb, Mongoose, Cheerio, Express Js, Axios, Puppeteer, Mlab, Node js, Express js, Heroku, Github, Javascript, Jquery, Bootstrap, Css, Material-ui, Cors, Prettier',
        link1:'https://shrouded-taiga-88482.herokuapp.com/',
        link1Text: 'Live Site',
        link2: 'https://github.com/moshecstern/mernbooks',
        link2Text: 'Github',
        link3: '',
        skills: [''],
        image: '../../images/graphicnoveldb.JPG'
    },
    {
        title: 'Churchland Psychological Center',
        role: 'MERN',
        date: 'Oct 19',
        main: 'Full stack MERN website, for a healthcare center in Virginia, built with react context and role based security. Admins can add, edit, and delete information on every page. Hipaa compliant, using Hushmail.',
        main2: 'React Hooks, Context, Node, MongoDB, Express, JWT, Hushmail, and Heroku ',
        link1: 'http://www.counselinghr.com/',
        link1Text: 'Live Site',
        link2: 'https://github.com/moshecstern/churchland',
        link2Text: 'Github',
        link3: '',
        skills: [''],
        image: '../../images/profilepic2.JPG'
    },
    {
        title: 'Reading List',
        role: 'MERN',
        date: 'Sept 19',
        main: 'Track, add, and comment on books that you want to or have read',
        main2: 'React, Mongodb, Mongoose, Mlab, Node js, Express js, Heroku, Github, Javascript, Jquery, Bootstrap, Html, Css',
        link1: 'https://murmuring-forest-14086.herokuapp.com/',
        link1Text: 'Live Site',
        link2: 'https://github.com/moshecstern/googleBooksReact',
        link2Text: 'Github',
        link3: '',
        skills: [''],
        image: ''
    },
    {
        title: 'News Clips',
        role: 'MERN',
        date: 'Sept 19',
        main: 'News Clips: a website that brings you news and allows you to post messages',
        main2: 'Mongodb, Mongoose, Mlab, Node js, Express js, Handlebars, Heroku, Github, Javascript, Jquery, Bootstrap, Html, Css',
        link1: 'https://aqueous-dusk-11498.herokuapp.com/',
        link1Text: 'Live Site',
        link2: 'https://github.com/moshecstern/sports-clips',
        link2Text: 'Github',
        link3: '',
        skills: [''],
        image: ''
    },
    {
        title: 'Liberty Coffee',
        role: 'MYSQL',
        date: '',
        main: 'Liberty Coffee lets you find, save, and buy all diffrent types of coffee!',
        main2: 'Github, Heroku, JawsDB, Node.js, Express.js, MySQL, Sequelize, Passport.js, Bcrypt, JavaScript, jQuery, Handlebars, Bootstrap, HTML, CSS',
        link1: 'https://young-forest-75020.herokuapp.com/',
        link1Text: 'Live Site',
        link2: 'https://github.com/moshecstern/project2',
        link2Text: 'Github',
        link3: '',
        skills: [''],
        image: ''
    },
    {
        title: 'Friend Finder Quiz',
        role: 'MYSQL',
        date: 'Sept 19',
        main: 'mysql, JavaScript, jQuery, node.js, Express.js, HTML, Bootstrap',
        main2: 'Find your best match with this specially made game',
        link1: 'https://aqueous-reaches-76550.herokuapp.com/',
        link1Text: 'Live Site',
        link2: 'https://github.com/moshecstern/friendFinder',
        link2Text: 'Github',
        link3: '',
        skills: [''],
        image: ''
    },
    {
        title: 'Coffee Tracker',
        role: 'MYSQL',
        date: 'Sept 19',
        main: 'App that tracks coffees that you want and rates the ones you have!',
        main2: 'MySQL,html, CSS, Javascript, Bootstrap, Node.js, Express.js, Handlebars',
        link1: 'https://pacific-journey-55427.herokuapp.com/',
        link1Text: 'Live Site',
        link2: 'https://github.com/moshecstern/favTracker',
        link2Text: 'Github',
        link3: '',
        skills: [''],
        image: ''
    },
    {
        title: 'Hot Resturant',
        role: 'MYSQL',
        date: 'Sept 19',
        main: 'Hot Resturant keeps track of table reservations',
        main2: 'Node js, mysql, Express js',
        link1: 'https://infinite-reaches-60612.herokuapp.com/',
        link1Text: 'Live Site',
        link2: 'https://github.com/moshecstern/hotresturant',
        link2Text: 'Github',
        link3: '',
        skills: [''],
        image: ''
    },
    {
        title: 'Firebase Train',
        role: 'Firebase',
        date: 'Sept 19',
        main: 'App that allows you to track train schedules, and create new ones',
        main2: 'Firebase, Javascript, Jquery, bootsrap, moment, Ajax',
        link1: 'https://moshecstern.github.io/firebaseTrain/',
        link1Text: 'Live Site',
        link2: 'https://github.com/moshecstern/firebaseTrain',
        link2Text: 'Github',
        link3: '',
        skills: [''],
        image: ''
    },
    {
        title: 'Event Finder',
        role: 'API',
        date: 'Oct 19',
        main: 'The app to find events, news, and weather in any city around the world',
        main2: 'Javascript, Bootstrap, Jquery, Css, Html || Yelp Fusion, Ticket Master, News, Open Weather',
        link1: 'https://moshecstern.github.io/project1/',
        link1Text: 'Live Site',
        link2: 'https://github.com/moshecstern/project1',
        link2Text: 'Github',
        link3: '',
        skills: [''],
        image: ''
    },
    {
        title: 'Giphy Search',
        role: 'API',
        date: 'Oct 19',
        main: "Search for Superheroes and find Giphy's, character data, and movies!",
        main2: 'Javascript, Css, Html || Giphy, Omdb, SuperheroAPI',
        link1: 'https://moshecstern.github.io/giphy/',
        link1Text: 'Live Site',
        link2: 'https://github.com/moshecstern/giphy',
        link2Text: 'Github',
        link3: '',
        skills: [''],
        image: ''
    },
    {
        title: 'Bamazon Store',
        role: 'NODE',
        date: 'Oct 19',
        main: 'Bamazon Store offers customer, manager and supervisor levels. Tracks inventory, sales, profits and more!',
        main2: 'Mysql, Node js, Javascript, Npm',
        link1: 'https://github.com/moshecstern/bamazon',
        link1Text: 'Live Site',
        link2: 'https://drive.google.com/file/d/1RsOhuo9WziHqhWRLa56mFsIyWQPYFw-N/view',
        link2Text: 'Coding Video',
        link3: '',
        skills: [''],
        image: ''
    },
    {
        title: 'Liri Bot',
        role: 'NODE',
        date: 'Sept 19',
        main: 'Node Liri Bot finds movie info, concerts coming up, find music and saves all in a logs file searches using node js.',
        main2: 'Node Js, Npm',
        link1: 'https://moshecstern.github.io/project1/',
        link1Text: 'Live Site',
        link2: 'https://drive.google.com/file/d/1RsOhuo9WziHqhWRLa56mFsIyWQPYFw-N/view',
        link2Text: 'Coding Video',
        link3: '',
        skills: [''],
        image: ''
    },
    {
        title: 'Superhero Memory Game',
        role: 'Games',
        date: 'Nov 19',
        main: "Test your memory by clicking all the superheroes, but don't click them twice!",
        main2: 'React, Javascript, Node js, Github, Gh-pages, Html, Css, Bootstrap',
        link1: 'https://moshecstern.github.io/reactmemorygame/',
        link1Text: 'Live Site',
        link2: 'https://github.com/moshecstern/reactmemorygame',
        link2Text: 'Github',
        link3: '',
        skills: [''],
        image: ''
    },
    {
        title: 'Superhero Quiz',
        role: 'Games',
        date: 'Sept 19',
        main: 'See if you have the stuff to get them all right before time runs out!',
        main2: 'JavaScript, Css, Html',
        link1: 'https://moshecstern.github.io/TriviaGame/',
        link1Text: 'Live Site',
        link2: 'https://github.com/moshecstern/TriviaGame',
        link2Text: 'Github',
        link3: '',
        skills: [''],
        image: ''
    },
    {
        title: 'Batman Villain',
        role: 'Games',
        date: 'Sept 19',
        main: 'Batman Villain Hangman Game, guess the villain by guessing letters in the villains name',
        main2: 'JavaScript, Css, Html',
        link1: 'https://moshecstern.github.io/TriviaGame/',
        link1Text: 'Live Site',
        link2: 'https://github.com/moshecstern/TriviaGame',
        link2Text: 'Github',
        link3: '',
        skills: [''],
        image: ''
    },
    {
        title: 'Crystal Collector',
        role: 'Games',
        date: 'Sept 19',
        main: 'Crystal Collector Game, click on a crystal to get the exact score',
        main2: 'Javascript, Css, Html',
        link1: 'https://moshecstern.github.io/unit-4-game/',
        link1Text: 'Live Site',
        link2: 'https://github.com/moshecstern/unit-4-game',
        link2Text: 'Github',
        link3: '',
        skills: [''],
        image: ''
    }
    // {
    //     title: '',
    //     role: '',
    //     date: '',
    //     main: '',
    //     main2: '',
    //     link1: '',
    //     link1Text: 'Live Site',
    //     link2: '',
    //     link2Text: 'Github',
    //     link3: '',
    //     skills: [''],
    //     image: ''
    // }
]
const SectionLinks = [
    {
        link: '/home',
        linkName: 'Home'
    },
    {
        link: '#mongodbprojects',
        linkName: 'Mongodb'
    },
    {
        link: '#mysqlprojects',
        linkName: 'MYSQL'
    },
    {
        link: '#firebaseprojects',
        linkName: 'Firebase'
    },
    {
        link: '#apiprojects',
        linkName: 'REST API'
    },
    {
        link: '#nodeprojects',
        linkName: 'Node JS'
    },
    {
        link: '#javascriptgames',
        linkName: 'JS Games'
    },
   
]


    return (
<>
{/* <div id="header"> */}
{/* <div className={classes.header} /> */}
{/* <div className={classes.header} /> */}

{/* <SideBar Links={SectionLinks}/> */}
{/* // </div> */}
{/* <!-- Main --> */}

<div className={classes.main}>

{/* <!-- Intro --> */}
{/* <div className={classes.top}> */}
{/* <section id="top" className="one dark cover"> */}
    <div className="header repositoryheader">

        <div className={classes.smallheader}>
            {/* <h2 className="alt">Moshe's Project Page</h2> */}
            <H2 title={'Full Projects page'} />
        </div>


        <footer>
            <a href='/home' className="button icon solid fa-home">Home</a>
            {/* <!-- <a href="https://github.com/moshecstern?tab=repositories" target="_blank"
                    className="button scrolly">Github Portfolio</a> --> */}
        </footer>

    </div>
    
{/* // </section> */}
{/* <!-- Portfolio Top --> */}
<section id="portfolio" className="two">
    <div className="container">
        {/* <!-- <header>
            <h2>All My Projects</h2>
        </header> --> */}

        {/* <!-- 1st  row REACT memory game and mernbooks/ project 3 --> */}
        <div id="mongodbprojects">
            <H2 title={'Mongodb Projects'} />
        </div>
        {/* <!-- api calls  project1, giphy--> */}
        <Grid container className={classes.row}
        // "row projects"
         >
            {/* <!-- PROJECT 3 graphic novel website --> */}
            {Projects.filter(projects => projects.role === 'MERN').map(filteredprojects => (

            <Grid item sm={12} md={6}>
            <CardProject 
                title={filteredprojects.title}
                role={filteredprojects.role}
                date={filteredprojects.date}
                main={filteredprojects.main}
                main2={filteredprojects.main2}
                link1={filteredprojects.link1}
                link1Text={filteredprojects.link1Text}
                link2={filteredprojects.link2}
                link2Text={filteredprojects.link2Text}
                link3={filteredprojects.link3}
                skills={filteredprojects.skills}
                image={filteredprojects.image}
            />
            </Grid>
            ))}
    

        </Grid>
        {/* end row */}


{/* MYSQL Projects */}
<div id="mysqlprojects">
            <H2 title={'MYSQL Projects'} />
        </div>
        <Grid container className={classes.row}
        // "row projects"
         >
            {/* <!-- PROJECT 3 graphic novel website --> */}
            {Projects.filter(projects => projects.role === 'MYSQL').map(filteredprojects => (

            <Grid item sm={12} md={6}>
            <CardProject 
                title={filteredprojects.title}
                role={filteredprojects.role}
                date={filteredprojects.date}
                main={filteredprojects.main}
                main2={filteredprojects.main2}
                link1={filteredprojects.link1}
                link1Text={filteredprojects.link1Text}
                link2={filteredprojects.link2}
                link2Text={filteredprojects.link2Text}
                link3={filteredprojects.link3}
                skills={filteredprojects.skills}
                image={filteredprojects.image}
            />
            </Grid>
            ))}
    

        </Grid>
        {/* end row */}

{/* Firebase */}
<div id="firebaseprojects">
            <H2 title={'Firebase Projects'} />
        </div>
        <Grid container className={classes.row}
        // "row projects"
         >
            {/* <!-- PROJECT 3 graphic novel website --> */}
            {Projects.filter(projects => projects.role === 'Firebase').map(filteredprojects => (

           

            <Grid item sm={12} md={6}>
            <CardProject 
                title={filteredprojects.title}
                role={filteredprojects.role}
                date={filteredprojects.date}
                main={filteredprojects.main}
                main2={filteredprojects.main2}
                link1={filteredprojects.link1}
                link1Text={filteredprojects.link1Text}
                link2={filteredprojects.link2}
                link2Text={filteredprojects.link2Text}
                link3={filteredprojects.link3}
                skills={filteredprojects.skills}
                image={filteredprojects.image}
            />
            </Grid>
            ))}
    

        </Grid>
        {/* end row */}

{/* API Projects */}
        <div id="apiprojects">
            <H2 title={'REST API Projects'} />
        </div>
        <Grid container className={classes.row}
        // "row projects"
         >
            {/* <!-- PROJECT 3 graphic novel website --> */}
            {Projects.filter(projects => projects.role === 'API').map(filteredprojects => (

           

            <Grid item sm={12} md={6}>
            <CardProject 
                title={filteredprojects.title}
                role={filteredprojects.role}
                date={filteredprojects.date}
                main={filteredprojects.main}
                main2={filteredprojects.main2}
                link1={filteredprojects.link1}
                link1Text={filteredprojects.link1Text}
                link2={filteredprojects.link2}
                link2Text={filteredprojects.link2Text}
                link3={filteredprojects.link3}
                skills={filteredprojects.skills}
                image={filteredprojects.image}
            />
            </Grid>
            ))}
    

        </Grid>
        {/* end row */}

{/* NODE Project */}
        <div id="nodeprojects">
            <H2 title={'Node Projects'} />
        </div>
        <Grid container className={classes.row}
        // "row projects"
         >
            {/* <!-- PROJECT 3 graphic novel website --> */}
            {Projects.filter(projects => projects.role === 'NODE').map(filteredprojects => (

           

            <Grid item sm={12} md={6}>
            <CardProject 
                title={filteredprojects.title}
                role={filteredprojects.role}
                date={filteredprojects.date}
                main={filteredprojects.main}
                main2={filteredprojects.main2}
                link1={filteredprojects.link1}
                link1Text={filteredprojects.link1Text}
                link2={filteredprojects.link2}
                link2Text={filteredprojects.link2Text}
                link3={filteredprojects.link3}
                skills={filteredprojects.skills}
                image={filteredprojects.image}
            />
            </Grid>
            ))}
    

        </Grid>
        {/* end row */}

        {/* Games Projects */}
        <div id="javascriptgames">
            <H2 title={'JavaScript Games'} />
        </div>
        <Grid container className={classes.row}
        // "row projects"
         >
            {/* <!-- PROJECT 3 graphic novel website --> */}
            {Projects.filter(projects => projects.role === 'Games').map(filteredprojects => (

            <Grid item sm={12} md={6}>
            <CardProject 
                title={filteredprojects.title}
                role={filteredprojects.role}
                date={filteredprojects.date}
                main={filteredprojects.main}
                main2={filteredprojects.main2}
                link1={filteredprojects.link1}
                link1Text={filteredprojects.link1Text}
                link2={filteredprojects.link2}
                link2Text={filteredprojects.link2Text}
                link3={filteredprojects.link3}
                skills={filteredprojects.skills}
                image={filteredprojects.image}
            />
            </Grid>
            ))}
        </Grid>
        {/* end row */}

</div>
    {/* <!-- end of container --> */}

    {/* <!-- </div>end of main --> */}
{/* // </section> */}
    {/* </div> */}
</section>


 

</div>

</>
    )
  }
  export default Projects;