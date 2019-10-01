import React, { Component } from 'react';
import '../layout.scss';
import bg from '../assets/bg.jpg';

class Layout extends Component {
  componentDidMount() {
    document.title = 'Queens for Warren';
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="App">
        <img src={bg} className="background" alt="" />
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
