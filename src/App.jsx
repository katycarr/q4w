import React, { Component } from 'react';
import './App.scss';
import bg from './assets/bg.jpg';
import logo from './assets/logo.png';
import SocialLinks from './social-links';

class App extends Component {
  componentDidMount() {
    document.title = 'Queens for Warren';
  }

  render() {
    return (
      <div className="App">
        <img src={bg} className="background" alt="" />
        <div className="content">
          <div className="container">
            <div className="segment segment--first">
              <img src={logo} alt="Queens For Warren Logo" className="logo" />
              <div className="segment__text">
                Queens for Warren is a group of grassroots volunteers who 
                support Elizabeth Warren for President in 2020. Our goal 
                is to build a large coalition of Queens Warren supporters 
                by increasing awareness of her policies across the borough,
                hosting local events, and connecting neighbors who support 
                Warren 2020 online and in community. We hope you’ll join us!
              </div>
              <div className="segment__links">
                <a
                  className="segment__link" 
                  href="https://forms.gle/xbSXg1P2uuqEFtVF7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span role="img" aria-label="Waving Emoji">✋</span>
                  Sign up to volunteer 
                </a>
                <a
                  className="segment__link"
                  href="http://ewar.ren/queens"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span role="img" aria-label="Handshake Emoji">🤝</span>
                  {' '}Attend an event
                </a>
                <a
                  className="segment__link segment__link--last"
                  href="http://community.elizabethwarren.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span role="img" aria-label="Open Hands Emoji">👐</span>
                  Join All In for Warren
                </a>
              </div>
            </div>
            <div className="segment">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
