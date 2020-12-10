import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles'
import Theme from './components/theme/theme';
import { CssBaseline } from '@material-ui/core'

import AlertState from './components/context/alert/AlertState';
import AuthState from './components/context/authContext/AuthState'
import setAuthToken from './utils/setAuthToken'

// import PrivateRoute from "./components/routing/PrivateRoute";

// import Success from './components/pages/success';
// import PayFail from './components/pages/PayFail';
// import '@stripe/stripe-js';
import Navbar from './components/modules/layout/Navbar.jsx';
import Homepage from './components/pages/Homepage.jsx';
import About from './components/pages/About.jsx';
import Services from './components/pages/Services';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <ThemeProvider theme={Theme}>
    <CssBaseline />
    <AuthState>
    <AlertState>
    <Router>
    <div className="App">
    <Navbar />
    <Switch>
      {/* <Homepage /> */}
      {/* <PrivateRoute exact path="/admin" component={Home} /> */}
      <Route exact path="/" component={Homepage} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/about" component={About} />
      {/* <Route exact path="/success" component={Success} /> */}
      {/* <Route exact path="/payfail" component={PayFail} /> */}

      </Switch>
    </div>
    </Router>
    </AlertState>
    </AuthState>
    </ThemeProvider>
  );
}

export default App;
