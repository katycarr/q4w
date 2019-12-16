import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './components/home';
import Volunteer from './components/volunteer';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from='/volunteer' to='/newsletter' />
        <Route path='/newsletter' component={Volunteer} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
