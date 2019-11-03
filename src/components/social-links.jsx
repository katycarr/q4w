import React, { Component } from 'react';
import '../social-links.scss';
import facebook from '../assets/social-Facebook.svg';
import twitter from '../assets/social-Twitter.svg';
import email from '../assets/social-Email.svg';
import instagram from '../assets/social-Insta.svg';

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
          <img src={instagram} alt="instagram" className="social__icon" />
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
          href="https://www.facebook.com/groups/2399105493707356/?ref=share"
          className={wrapperClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="facebook" className="social__icon" />
        </a>
        <a
          href="mailto:queensforwarren@gmail.com"
          className={wrapperClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={email} alt="email" className="social__icon" />
        </a>
      </div>
    );
  }
}

export default SocialLinks;
