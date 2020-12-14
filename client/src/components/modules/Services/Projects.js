import React from 'react';
// import React, { useContext, useEffect } from 'react';
// import AuthContext from '../../context/auth/authContext';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    //   background image: max height 700 px
    },
    top: {
        display: 'flex',
        flexGrow: 1,
        // background: '#222629 url("images/overlay.png")',
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
		width: '375px'
    },
    logo: {
        position: 'relative',
		margin: '1.75em 1.5em 1.5em 1.5em',
		minHeight: '48px',
        cursor: 'default',
        
    }
  }));

  const Projects = props => {
    const classes = useStyles();





    return (
<>
<div id="header">

<div classNameName={classes.top}>

    {/* <!-- Logo --> */}
    <div className={classes.logo}>
        <span className="image avatar48"><img src="images/profilepic2.JPG" alt="" /></span>
        <h1 id="title">Moshe Stern</h1>
        <p>Full Stack Computer Programmer</p>
        <p>Go To <a href="./index.html"> My Portfolio Here </a></p>

    </div>

    {/* <!-- Nav --> */}
    <nav id="nav">
        <ul>
            <li><a href='index.html'><span className="icon solid fa-home">Home</span></a></li>
            <li><a href="#mongodbprojects">Mongodb</a></li>
            <li><a href="#mysqlprojects" id="top-link">Mysql</a></li>
            <li><a href="#firebaseprojects" id="top-link">Firebase</a></li>
            <li><a href="#apiprojects">API Projects</a></li>
            <li><a href="#nodeprojects" id="top-link">Node JS</a></li>
            <li><a href="#javascriptgames">JS Games</a></li>
            <li><a href="#skillssection">Skills</a></li>
{/* // </div> */}
</ul>
</nav>

</div>
</div>
{/* <!-- Main --> */}
<div id="main">

{/* <!-- Intro --> */}
<section id="top" className="one dark cover">
    <div className="header repositoryheader">

        <header>
            <h2 className="alt">Moshe's Project Page</h2>
        </header>

        <footer>
            <a href='./index.html' className="button icon solid fa-home">Home</a>
            {/* <!-- <a href="https://github.com/moshecstern?tab=repositories" target="_blank"
                    className="button scrolly">Github Portfolio</a> --> */}
        </footer>

    </div>
</section>
{/* <!-- Portfolio Top --> */}
<section id="portfolio" className="two">
    <div className="container">
        {/* <!-- <header>
            <h2>All My Projects</h2>
        </header> --> */}

        {/* <!-- 1st  row REACT memory game and mernbooks/ project 3 --> */}
        <div className="center" id="mongodbprojects">
            <h2>Mongodb Projects</h2>
        </div>
        {/* <!-- api calls  project1, giphy--> */}
        <div className="row projects" >
            {/* <!-- PROJECT 3 graphic novel website --> */}
            <div className="col-6 col-12-mobile">
                <article className="item">
                    <h3>Graphic Know-vel</h3>
                    <a href="https://shrouded-taiga-88482.herokuapp.com/" target="_blank" className="image fit"><img src="images/graphicnoveldb.png"
                            alt="" /></a>
                    <h4><a href="https://github.com/moshecstern/mernbooks" target="_blank">Github</a> : <a
                            href="https://shrouded-taiga-88482.herokuapp.com/" target="_blank">Live Site</a></h4>
                    <header>
                        <h4>Graphic Know-vels is an application to help graphic novel readers navigate, explore, annote, and save personal collections of these novels.</h4>
                        {/* <!-- <br> --> */}
                        <h5>React, React-Hooks, Mongodb, Mongoose, Cheerio, Express Js, Axios, Puppeteer, Mlab, Node js, Express js, Heroku, Github, Javascript,
                            Jquery, Bootstrap, Css, Material-ui, Cors, Prettier </h5>
                    </header>
                </article>
            </div>
            {/* <!-- Churchland --> */}
            <div className="col-6 col-12-mobile">
                <article className="item">
                    <h3>Churchland Psychological Center</h3>
                    <a href="http://www.counselinghr.com/" target="_blank" className="image fit"><img
                            src="images/cpclogo2.png" alt="" /></a>
                    <h4><a href="https://github.com/moshecstern/churchland" target="_blank">Github</a> : <a
                            href="http://www.counselinghr.com/" target="_blank">Live Site</a></h4>
                    <header>
                        <h4>Full stack MERN website, for a healthcare center in Virginia, built with react context and role based
                            security. Admins can add, edit, and delete information on every page. Hipaa compliant, using Hushmail. </h4>
                        <h5>React Hooks, Context, Node, MongoDB, Express, JWT, Hushmail, and Heroku </h5>
                    </header>
                </article>
            </div>
        </div>
        <div className="row">
            {/* <!-- readin list --> */}
            <div className="col-6 col-12-mobile">
                <article className="item">
                    <h3>Reading List</h3>
                    <a href="https://murmuring-forest-14086.herokuapp.com/" target="_blank"
                        className="image fit"><img src="images/readinglist.png" alt="" /></a>
                    <h4><a href="https://github.com/moshecstern/googleBooksReact" target="_blank">Github</a> :
                        <a href="https://murmuring-forest-14086.herokuapp.com/" target="_blank">Live Site</a>
                    </h4>
                    <header>
                        <h4>Track, add, and comment on books that you want to or have read</h4>
                        <h5>React, Mongodb, Mongoose, Mlab, Node js, Express js, Heroku, Github, Javascript,
                            Jquery, Bootstrap, Html, Css </h5>
                    </header>
                </article>
            </div>
            {/* <!-- news Clips --> */}
            <div className="col-6 col-12-mobile">
                <article className="item">
                    <h3>News Clips</h3>
                    <a href="https://aqueous-dusk-11498.herokuapp.com/" target="_blank" className="image fit"><img
                            src="images/scraper.png" alt="" /></a>
                    <h4><a href="https://github.com/moshecstern/sports-clips" target="_blank">Github</a> : <a
                            href="https://aqueous-dusk-11498.herokuapp.com/" target="_blank">Live Site</a></h4>
                    <header>
                        <h4>News Clips: a website that brings you news and allows you to post messages</h4>
                        <h5>Mongodb, Mongoose, Mlab, Node js, Express js, Handlebars, Heroku, Github,
                            Javascript, Jquery, Bootstrap, Html, Css </h5>
                    </header>
                </article>
            </div>
        </div>
        {/* <!-- end of 1st row 3 projects Mongodb --> */}

        {/* <!-- MYSQL  2nd row 4 projects  liberty coffee, friend finder ,Fav Tracker ,HOT RESTURANTS,  --> */}
        <div className="center"  id="mysqlprojects">
            <h2>Mysql Projects</h2>
        </div>
        <div className="row projects">
            {/* <!-- Liberty Coffee --> */}
            <div className="col-3 col-12-mobile">
                <article className="item">
                    <h3>Liberty Coffee</h3>
                    <a href="https://young-forest-75020.herokuapp.com/" target="_blank" className="image fit"><img
                            src="images/1LBlogo.png" alt="" /></a>
                    {/* <!-- <h4>Click links</h4> --> */}
                    <h5> <a href="https://github.com/moshecstern/project2" target="_blank">Github</a> : <a
                            href="https://young-forest-75020.herokuapp.com/" target="_blank">Live Site</a></h5>
                    <header>
                        <h4>Liberty Coffee lets you find, save, and buy all diffrent types of coffee! </h4>
                        {/* <!-- <h3>Technologies</h3> --> */}
                        {/* <!-- <br> --> */}
                        <h5>Github, Heroku, JawsDB, Node.js, Express.js, MySQL, Sequelize, Passport.js, Bcrypt,
                            JavaScript, jQuery, Handlebars, Bootstrap, HTML, CSS </h5>
                    </header>
                </article>
            </div>
            {/* <!-- friend finder --> */}
            <div className="col-3 col-12-mobile">
                <article className="item">
                    <h3>Friend Finder Quiz</h3>
                    <a href="https://aqueous-reaches-76550.herokuapp.com/" target="_blank"
                        className="image fit"><img src="images/friendfinder.png" alt="" /></a>
                    <h5> <a href="https://github.com/moshecstern/friendFinder" target="_blank">Github</a> : <a
                            href="https://aqueous-reaches-76550.herokuapp.com/" target="_blank">Live
                            Site</a></h5>
                    <header>
                        <h4>Find your best match with this specially made game </h4>
                        <h4>mysql, JavaScript, jQuery, node.js, Express.js,
                            HTML, Bootstrap </h4>
                    </header>
                </article>
            </div>

            {/* <!-- Fav Tracker --> */}
            <div className="col-3 col-12-mobile">
                <article className="item">
                    <h3>Coffee Tracker</h3>
                    <a href="https://pacific-journey-55427.herokuapp.com/" target="_blank"
                        className="image fit"><img src="images/favfinder.jpg" alt="" /></a>
                    <header>
                        <h5><a href="https://github.com/moshecstern/favTracker" target="_blank">Github</a> : <a
                                href="https://pacific-journey-55427.herokuapp.com/" target="_blank">Live
                                Site</a></h5>
                        <h4>App that tracks coffees that you want and rates the ones you have!</h4>
                        <h4>MySQL,html, CSS, Javascript, Bootstrap, Node.js, Express.js, Handlebars</h4>

                    </header>
                </article>
            </div>

            {/* <!-- HOT resturants --> */}
            <div className="col-3 col-12-mobile">
                <article className="item">
                    <h3>Hot Resturant</h3>
                    <a href="https://infinite-reaches-60612.herokuapp.com/" target="_blank"
                        className="image fit"><img src="images/hotresturant.jpg" alt="" /></a>
                    <header>
                        <h5><a href="https://github.com/moshecstern/hotresturant" target="_blank">Github</a> :
                            <a href="https://infinite-reaches-60612.herokuapp.com/" target="_blank">Live
                                Site</a>
                            </h5>
                            <h4>Hot Resturant keeps track of table reservations</h4>
                            <h4>Node js, mysql, Express js</h4>

                    </header>
                    </article>
                    
            </div>

        {/* </div> */}
        {/* <!--  MYSQL end of 3rd row 4 projects    --> */}

        {/* <!-- firebase --> */}
        {/* <!-- 2nd row --> */}
        <div className="center"  id="firebaseprojects">
            <h2>Firebase Projects</h2>
        </div>
        {/* <!-- api calls  project1, giphy--> */}
        <div className="row projects">
            {/* <!-- PROJECT One Event finder --> */}
            <div className="col-4 offset-4 col-12-mobile">
                {/* <!-- FIREBASE --> */}
                <article className="item">
                    <h3>Firebase Train</h3>
                    <h5>Click links for <a href="https://github.com/moshecstern/firebaseTrain"
                            target="_blank">Github</a> or <a href="https://moshecstern.github.io/firebaseTrain/"
                            target="_blank">Live Site</a></h5>
                    <a href="https://moshecstern.github.io/firebaseTrain/" target="_blank"
                        className="image fit"><img src="images/firebaseTrain.jpg" alt="" /></a>
                    <header>
                        <h4>App that allows you to track train schedules, and create new ones </h4>
                        <h4> Uses: Firebase, Javascript, Jquery, bootsrap, moment, Ajax</h4>
                    </header>
                </article>
            </div>
            {/* <!-- add another here --> */}
        </div>
        {/* <!-- API end of 2nd row 2 projects --> */}

        {/* <!-- 2nd row --> */}
        <div className="center"  id="apiprojects">
            <h2>API Projects</h2>
        </div>
        {/* <!-- api calls  project1, giphy--> */}
        <div className="row projects">
            {/* <!-- PROJECT One Event finder --> */}
            <div className="col-6 col-12-mobile">
                <article className="item">
                    <h3>Event Finder</h3>
                    <a href="https://moshecstern.github.io/project1/" target="_blank" className="image fit"><img
                            src="images/groupproject1.jpg" alt="" /></a>
                    <h5><a href="https://github.com/moshecstern/project1" target="_blank">Github</a> : <a
                            href="https://moshecstern.github.io/project1/" target="_blank">Live Site</a></h5>
                    <header>
                        <h3>The app to find events, news, and weather in any city around the world</h3>

                        <h5> Javascript, Bootstrap, Jquery, Css, Html</h5>
                        <h5> Yelp Fusion, Ticket Master, News, Open Weather</h5>
                    </header>
                </article>
            </div>
            {/* <!-- GIPHY --> */}
            <div className="col-6 col-12-mobile">
                <article className="item">
                    <h3>Giphy Search</h3>
                    <a href="https://moshecstern.github.io/giphy/" target="_blank" className="image fit"><img
                            src="images/giphy.png" alt="" /></a>
                    <h5><a href="https://github.com/moshecstern/giphy" target="_blank">Github</a> : <a
                            href="https://moshecstern.github.io/giphy/" target="_blank">Live Site</a></h5>
                    <header>
                        <h3>Search for Superheroes and find Giphy's, character data, and movies!</h3>
                        <h5>Javascript, Css, Html</h5>
                        <h5> Giphy, Omdb, SuperheroAPI</h5>
                    </header>
                </article>
            </div>
        </div>
        {/* <!-- API end of 2nd row 2 projects --> */}




        {/* <!-- Node js  row 2 projects   Bamazon, nodejshomework (LIRI),  --> */}
        <div className="center" id="nodeprojects">
            <h2>Node JS</h2>
        </div>
        <div className="row projects">
            {/* <!-- Bamazon --> */}
            <div className="col-6 col-12-mobile">
                <article className="item">
                    <h3>Bamazon Store</h3>
                    <a href="https://github.com/moshecstern/bamazon" target="_blank" className="image fit"><img
                            src="images/bamazonLogoOne.jpg" alt="" /></a>
                    <h5><a href="https://github.com/moshecstern/bamazon" target="_blank">Github</a> : <a
                            href="https://drive.google.com/file/d/1RsOhuo9WziHqhWRLa56mFsIyWQPYFw-N/view"
                            target="_blank">Live Coding Video</a></h5>
                    <header>
                        <h3>Bamazon Store offers customer, manager and supervisor levels. Tracks inventory,
                            sales, profits and more! </h3>
                        {/* <!-- <br> --> */}
                        <h5>Mysql, Node js, Javascript, Npm</h5>
                    </header>
                </article>
            </div>
            {/* <!-- LIRI --> */}
            <div className="col-6 col-12-mobile">
                <article className="item">
                    <h3>Liri Bot</h3>
                    <a href="https://moshecstern.github.io/project1/" target="_blank" className="image fit"><img
                            src="images/liri.png" alt="" /></a>
                    <h5><a href="https://github.com/moshecstern/nodejshomework" target="_blank">Github</a> : <a
                            href="https://drive.google.com/file/d/1RsOhuo9WziHqhWRLa56mFsIyWQPYFw-N/view"
                            target="_blank">Live Coding Video</a></h5>
                    <header>
                        <h4>Node Liri Bot finds movie info, concerts coming up, find music and saves all in a
                            logs file
                            searches using node js. </h4>
                        <h4>Node Js, Npm</h4>
                    </header>
                </article>
            </div>
        </div>
        {/* <!-- end of node js row 2 projects --> */}




        {/* <!-- row for games  --> */}
        <div className="center" id="reactprojects">
            <h2>Javascript Games</h2>
        </div>
        {/* <!-- 4th row 4 Games Hangman, Trivia Game,  Unit 4 game Crystal collector --> */}
        <div className="row projects" id="javascriptgames">

            {/* <!-- superhero memory game --> */}
            <div className="col-3 col-12-mobile">
                <article className="item">
                    <h3>Superhero Memory Game</h3>
                    <a href="https://moshecstern.github.io/reactmemorygame/" target="_blank"
                        className="image fit"><img src="images/reactmemorygame.png" alt="" /></a>
                    <h5> <a href="https://github.com/moshecstern/reactmemorygame" target="_blank">Github</a>
                        : <a href="https://moshecstern.github.io/reactmemorygame/" target="_blank">Live Site</a>
                    </h5>
                    <header>
                        <h4>Test your memory by clicking all the superheroes, but don't click them twice! </h4>
                        {/* <!-- <h3>Technologies</h3> --> */}
                        {/* <!-- <br> --> */}
                        <h5>React, Javascript, Node js, Github, Gh-pages, Html, Css, Bootstrap</h5>
                    </header>
                </article>
            </div>

            {/* <!-- Trivia Game --> */}
            <div className="col-3 col-12-mobile">
                <article className="item">
                    <h3>Superhero Quiz</h3>
                    <a href="https://moshecstern.github.io/TriviaGame/" target="_blank" className="image fit"><img
                            src="images/superheroQuiz.jpg" alt="" /></a>
                    <h5><a href="https://github.com/moshecstern/TriviaGame" target="_blank">Github</a> : <a
                            href="https://moshecstern.github.io/TriviaGame/" target="_blank">Live Site</a></h5>
                    <header>
                        <h4>Superhero quiz: See if you have the stuff to get them all right before time runs
                            out!</h4>
                        <h4>JavaScript, Css, Html</h4>
                    </header>
                </article>
            </div>
            {/* <!-- Hangman --> */}
            <div className="col-3 col-12-mobile">
                <article className="item">
                    <h3>Batman Villain</h3>
                    <a href="https://moshecstern.github.io/hangmanGame/" target="_blank" className="image"><img
                            src="images/hangman.jpg" alt="" /></a>
                    <h5><a href="https://github.com/moshecstern/hangmanGame" target="_blank">Github</a> : <a
                            href="https://moshecstern.github.io/hangmanGame/" target="_blank">Live Site</a></h5>
                    <header>
                        <h4>Batman Villain Hangman Game, guess the villain by guessing letters in the villains
                            name </h4>
                        <h4>JavaScript, Css, Html</h4>
                    </header>
                </article>
            </div>
            {/* <!-- crystal collector --> */}
            <div className="col-3 col-12-mobile">
                <article className="item">
                    <h3>Crystal Collector</h3>
                    <a href="https://moshecstern.github.io/unit-4-game/" target="_blank" className="image fit"><img
                            src="images/crystalgame.jpg" alt="" /></a>
                    <h5><a href="https://github.com/moshecstern/unit-4-game" target="_blank">Github</a> : <a
                            href="https://moshecstern.github.io/unit-4-game/" target="_blank">Live site</a></h5>
                    <header>
                        <h4>Crystal Collector Game, click on a crystal to get the exact score</h4>
                        <h4>Javascript, Css, Html</h4>
                    </header>
                </article>
            </div>
        </div> 
        {/* <!-- 4th row 3 Games Hangman, Trivia Game,  Unit 4 game Crystal collector --> */}
    </div> 
</div>
    {/* <!-- end of container --> */}

    {/* <!-- </div>end of main --> */}
{/* // </section> */}
    {/* </div> */}
</section>


{/* <!-- Contact --> */}
<section id="portfolio" className="two">
    <div className="container" id="skillssection">

        <header>
            <h2>Skills</h2>
        </header>

        <div className="row">
            <div className="col-4 col-12-mobile">
                <h3>Languages</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Node JS</li>
                    <li>React</li>
                    <li>Express JS</li>
                </ul>
                 <h3>Contact</h3>
        <ul>
            <li>Phone: +1-267-432-9704</li>
            <li>Email: moshecstern@gmail.com</li>
        </ul> 
            </div>
            {/* <!-- end of col --> */}



            <div className="col-4 col-12-mobile">
                <h3>Database's</h3>
                <ul>
                    <li>Mongodb</li>
                    <li>MYSQL</li>
                    <li>Firebase</li>
                    <li>Local Storage</li>
                </ul>
                </div>

                {/* <!-- <div className="col-4 col-12-mobile"> --> */}
                <h3>Resources</h3>
                <ul>
                    <li>Github</li>
                    <li>Heroku</li>
                </ul>
            </div>
            {/* <!-- </div> --> */}
            <div className="col-4 col-12-mobile">
                <h3>Node Packages</h3>
                <ul>
                    <li>Express JS</li>
                    <li>Sequalize</li>
                    <li>Axios</li>
                    <li>Handlebars</li>
                    <li>Moment</li>
                    <li>inquirer</li>
                    <li>Prettier</li>
                    <li>React Scripts/ Dom</li>
                    <li>Mongoose</li>
                    <li>Nodemon</li>
                    <li>Cheerio</li>
                    <li>And More!</li>
                </ul>
            </div>
            {/* <!-- end of col --> */}

        </div>
        {/* <!-- end of 1st row --> */}
        <div className="three"><a href="./index.html" target="_blank"> <span className="icon solid fa-th">Main Page </span></a></div>
        <div className="three"><a href="https://github.com/moshecstern" target="_blank"><span className="icon brands fa-github">Github</span></a></div>
        <div className="three"><a href="https://angel.co/moshe-stern?public_profile=1" target="_blank"><span className="icon brands fa-angellist">Angel List</span></a></div>
        <div className="three"><a href="https://www.linkedin.com/in/moshe-stern-413205176/" target="_blank"><span className="icon brands fa-linkedin-in">Linkedin</span></a></div>
        <div className="three"><a href="https://www.facebook.com/moshecstern?ref=bookmarks" target="_blank"><span className="icon brands fa-facebook-f">Facebook</span></a></div>
        <div className="three"><a href="https://docs.google.com/document/d/17RtL7JBtJq_xi1Cp2FgmLAw_XtkUpHv95olaYpW3YdQ/edit?usp=sharing" target="_blank"><span className="icon brands fa-address-card">Resume</span></a></div>
        <div className="three"><h3 className="icon solid fa-phone"><span className="label"></span>Phone: +1-267-432-9704</h3></div>
        <div className="three"><h3 className="icon solid fa-envelope"><span className="label"></span>Email: moshecstern@gmail.com</h3></div>


    

</section>
 

</div>

</>
    )
  }
  export default Projects;