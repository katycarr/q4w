import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Home from './components/home';
import Volunteer from './components/volunteer';

function App() {
  return (
    <Router>
      <Redirect from='/volunteer' to='/newsletter' />
      <Route path='/newsletter' component={Volunteer} />
      <Route exact path='/' component={Home} />
    </Router>
  );
}

export default App;
