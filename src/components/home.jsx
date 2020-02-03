import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import { JSONLD, Generic } from 'react-structured-data';
import '../home.scss';
import logo from '../assets/Queens-for-Warren_Logo.svg';
import SocialLinks from './social-links';
import Layout from './layout';

class Home extends Component {
  componentDidMount() {
    document.title = 'Queens for Warren';
  }

  render() {
    return (
      <Layout>
        <JSONLD>
          <Generic type="organization" jsonldtype="Organization" schema={{
            url: 'http://queensforwarren.com',
            logo: 'https://www.queensforwarren.com/static/media/Queens-for-Warren_Logo.9dccef04.svg',
          }}
        />
        </JSONLD>
        <MetaTags>
          <title>Queens for Warren</title>
          <meta name="description"
            content="Queens for Warren is an inclusive group of grassroots volunteers
              who support Elizabeth Warren."
          />
        </MetaTags>
        <div className="segment segment--first">
          <div className="logo__container">
            <img src={logo} alt="Queens For Warren Logo" className="logo" />
          </div>
          <div className="segment__text">
            Queens for Warren is an inclusive group of grassroots volunteers who
            support Elizabeth Warren. Our goal is to mobilize Queens residents to
            canvass, table, flier, text bank, phone bank, and host events in order
            to talk to their neighbors about why Elizabeth Warren should be our
            next president. We hope you’ll join us!
          </div>
          <div className="segment__links">
            <a
              className="segment__link"
              href="https://community.elizabethwarren.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              All In Platform
            </a>
            <a
              className="segment__link"
              href="http://ewar.ren/queens"
              target="_blank"
              rel="noopener noreferrer"
            >
              Upcoming Events
            </a>
            <Link
              className="segment__link segment__link--last" 
              to="/newsletter"
            >
              Newsletter Signup
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
