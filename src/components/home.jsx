import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../home.scss';
import logo from '../assets/logo.png';
import SocialLinks from './social-links';
import Layout from './layout';

class Home extends Component {
  componentDidMount() {
    document.title = 'Queens for Warren';
  }

  render() {
    return (
      <Layout>
        <div className="segment segment--first">
          <img src={logo} alt="Queens For Warren Logo" className="logo" />
          <div className="segment__text">
            Queens for Warren is a inclusive group of grassroots volunteers.
            Our goal is to mobilize Queens residents to canvass, table,
            flier, text & phone bank, and host events in order to talk to
            their neighbors about why Elizabeth Warren should be our next
            president. We hope you’ll join us!
          </div>
          <div className="segment__links">
            <a
              className="segment__link"
              href="http://ewar.ren/queens"
              target="_blank"
              rel="noopener noreferrer"
            >
              Upcoming Events
            </a>
            <a
              className="segment__link"
              href="https://www.elections.ny.gov/VotingRegister.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              NY Voter Registration
            </a>
            <Link
              className="segment__link segment__link--last" 
              to="/volunteer"
            >
              Newsletter
            </Link>
          </div>
        </div>
        <div className="segment">
          <SocialLinks />
        </div>
      </Layout>
    );
  }
}

export default Home;
