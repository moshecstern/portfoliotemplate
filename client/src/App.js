import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles'
import Theme from './components/theme/theme';
import { CssBaseline } from '@material-ui/core'
import { makeStyles } from "@material-ui/core";

import AlertState from './components/context/alert/AlertState';
import AuthState from './components/context/authContext/AuthState'
import setAuthToken from './utils/setAuthToken'

// import PrivateRoute from "./components/routing/PrivateRoute";

import Success from './components/pages/success';
import PayFail from './components/pages/PayFail';
import '@stripe/stripe-js';
import Login from './components/pages/Login';
import Register from './components/pages/Register'
import Navbar from './components/modules/layout/Navbar.jsx';
import Homepage from './components/pages/Homepage.jsx';
import About from './components/pages/About.jsx';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Payment from './components/pages/Payment';
import Blog from './components/pages/Blog'



if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const useStyles = makeStyles(theme => ({
  // bg: { backgroundImage: `url(${ComicbookpagesModified})` },
  // backgroundImage: 'https://oceanservice.noaa.gov/facts/ocean-human-health.jpg'
  outerContainer: {backgroundColor: "pink"},
  container: { 
    backgroundColor: theme.palette.primary.dark,
    margin: 'auto',
  // display: "stretch" 
},
  bg: {
    margin: 'auto',
  }

}));
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={Theme}>
    <CssBaseline />
    <AuthState>
    <AlertState>
    <Router>
    <div className={classes.bg}>
    <Navbar />
    <Switch className={classes.container}>
      {/* <Homepage /> */}
      {/* <PrivateRoute exact path="/admin" component={Home} /> */}
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/home" component={Homepage} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/about" component={About} />
      <Route exact path="/payment" component={Payment} />
      <Route exact path="/success" component={Success} />
      <Route exact path="/payfail" component={PayFail} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/blog" component={Blog} />

      </Switch>
    </div>
    </Router>
    </AlertState>
    </AuthState>
    </ThemeProvider>
  );
}

export default App;
