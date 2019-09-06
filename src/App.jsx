import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/home';
import Volunteer from './components/volunteer';

function App() {
  return (
    <Router>
      <Route path='/volunteer' component={Volunteer} />
      <Route exact path='/' component={Home} />
    </Router>
  );
}

export default App;
