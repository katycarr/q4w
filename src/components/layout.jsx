import React, { Component } from 'react';
import '../layout.scss';

import Slider from './slider';

class Layout extends Component {
  componentDidMount() {
    document.title = 'Queens for Warren';
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="App">
        <Slider />
        <div className="content">
          <div className="container">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
