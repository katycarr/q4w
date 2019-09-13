import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from './layout';
import '../volunteer.scss';
import DropdownList from './dropdown-list';
import TextInput from './text-input';
import Trainings from './trainings';

const VOL_OPTIONS = [
  { name: 'Canvass',
    desc: 'Canvassing is when you knock on doors in your neighborhood to talk to people about Elizabeth Warren and record data about registered Democrats for the Warren campaign.' },
  { name: 'Table & Flier',
    desc: 'Tabling entails setting up a table outside of a well-trafficked area to hand out campaign literature, gather supporter data, talk to people about Elizabeth Warren, increase visibility within the borough, and (sometimes) register voters. Fliering is very similar to tabling, but rather than setting up a table, you simply hand out fliers. This is a little bit more agile and done at places like subway stations, well-trafficked sidewalks, etc.' },
  { name: 'Phone & Text Bank',
    desc: 'Text and call a list of people that the Warren campaign wants to reach out to. Sometimes you will call or text people who don’t live in your state. The campaign provides a script.' },
  { name: 'Host an Event',
    desc: <div>Hold an event with your community to discuss Elizabeth Warren’s plans and why you support her. We encourage you to do something fun while you talk. A few ideas include…
      <ul>
        <li>Doing a park cleanup with your mosque, synagogue, or church group</li>
        <li>Meeting up at the local dog park with your neighbors and their dogs</li>
        <li>Talking policy while crafting at a cafe</li>
        <li>Having a Moms for Warren night out with your mom group</li>
      </ul>
      Anyone can list an event like this on events.elizabethwarren.com, and the Queens for Warren team is happy to help you every step of the way.
    </div> },
];

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
        <h1>Thank you for signing up to volunteer with us!</h1>
        <div className="vol__info vol__info--top">
          You’ll get an email from us as soon as we have an action on the calendar that 
          matches your preferences.
        </div>
        <div className="vol__info">
          You can return to this form at any time to update your volunteer preferences, 
          as long as you use the same email address!
        </div>
        <div className="vol__info">
          In the meantime, we highly recommend that you sign up for an official campaign
          training for the actions you opted in for:
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
              <h1>Volunteer with us!</h1>
              <div className="vol__info">
                In Queens, we’re reaching out to our neighbors through the below 
                campaign-supported actions, and we need your help. Tick the boxes 
                for the actions you’re interested in, and we’ll email you when 
                something’s coming up. You can always resubmit the form if you 
                change your mind later.
              </div>
              <form className="vol__form" onSubmit={this.handleSubmit}>
                <div className="vol__info">
                  Let me know when there are opportunities to…
                </div>
                <DropdownList options={VOL_OPTIONS} />
                {this.renderTextInputs()}
                <input type="submit" className="vol__submit button" />
              </form>
            </React.Fragment>
        }
      </Layout>
    );
  }
}

export default Volunteer;
