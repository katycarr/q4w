import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import '../social-links.scss';
import warren from '../assets/warren.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';

class SocialLinks extends Component {
  state = { dimAll: false };

  render() {
    let wrapperClass = 'social__wrapper';
    if (this.state.dimAll) {
      wrapperClass += ' social__wrapper--dim';
    }

    return (
      <div
        className="social"
        onMouseEnter={() => this.setState({ dimAll: true })}
        onMouseLeave={() => this.setState({ dimAll: false })}
      >
        <a
          href="http://instagram.com/queensforwarren"
          className={wrapperClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="social__icon" />
        </a>
        <a
          href="https://www.facebook.com/groups/2399105493707356/?ref=share"
          className={wrapperClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="facebook" className="social__icon" />
        </a>
        <a
          href="http://twitter.com/queensforwarren"
          className={wrapperClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="twitter" className="social__icon" />
        </a>
        <a
          href="https://www.queensforwarren.com/mailto:queensforwarren@gmail.com"
          className={wrapperClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} className="social__icon" />
        </a>
        <a
          href="https://community.elizabethwarren.com/"
          className={wrapperClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={warren} alt="Warren Community" className="social__icon" />
        </a>
      </div>
    );
  }
}

export default SocialLinks;
