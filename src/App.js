import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';

import Menu from './Menu';
import Login from './Login';
import HomepageLayout from './HomepageLayout';
import Footer from './Footer'
import Body from './Body'
import {BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';


const App = () => (
  <Router>
  <Fragment>
    <Menu>
    
    <Routes />
    <Footer />
    </Menu>
    {/* <Container>
      <Login />
    </Container> */}
  </Fragment>
  </Router>
);

export default App;
