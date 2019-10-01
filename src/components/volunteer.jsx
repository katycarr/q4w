import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from './layout';
import '../volunteer.scss';
import TextInput from './text-input';
import Trainings from './trainings';

const emailReg = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$';

class Volunteer extends Component {
  constructor(props) {
    super(props);

    this.state = { done: false };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderTextInputs() {
    return (
      <div className="vol__inputs">
        <TextInput label="First Name" placeholder="Bailey" required />
        <TextInput label="Last Name" placeholder="Warren" required />
        <TextInput label="Email" placeholder="bailey@elizabethwarren.com" required pattern={emailReg} full />
        <TextInput label="Zip" placeholder="20500" required type="text" pattern="^\d{5}$" />
        <TextInput label="Phone" placeholder="000 000 0000" type="tel" pattern={null} />
      </div>
    );
  }

  handleSubmit(e) {
    // do something with data
    e.preventDefault();
    this.setState({ done: true });
  }

  renderDone() {
    return (
      <React.Fragment>
        <h1>Thank you for subscribing to our newsletter!</h1>
        <div className="vol__info vol__info--top">
          Can’t wait to start volunteering? Sign up for one of these official campaign
          trainings so that you can hit the ground running:
        </div>
        <Trainings />
        <Link to="/" className="vol__done">Done</Link>
      </React.Fragment>
    );
  }

  render() {
    return (
      <Layout>
        <Link to="/" className="close-link">&times;</Link>
        { this.state.done ? this.renderDone() :
            <React.Fragment>
              <h1>Join Us!</h1>
              <div className="vol__info">
                Sign up for our newsletter to get updates about volunteer opportunities,
                upcoming events, and Queens for Warren news. And don’t worry, we only
                send a couple of emails a month.
              </div>
              <form className="vol__form" onSubmit={this.handleSubmit}>
                {this.renderTextInputs()}
                <input type="submit" className="vol__submit button" value="Subscribe"/>
              </form>
            </React.Fragment>
        }
      </Layout>
    );
  }
}

export default Volunteer;
