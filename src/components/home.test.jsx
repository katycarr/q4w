import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './home';

configure({ adapter: new Adapter() });

const wrapper = shallow(<Home />);

describe('Home', () => {
  it('renders Layout component', () => {
    expect(wrapper.exists('Layout')).toEqual(true);
  });
  it('renders logo with alt text', () => {
    expect(wrapper.find('img.logo').alt).not.toBeNull();
  });
  it('renders a Link component to volunteer page', () => {
    expect(wrapper.find('Link').prop('to')).toEqual('/volunteer');
  });
  it('renders links to event and donate pages', () => {
    expect(wrapper.containsAllMatchingElements([
      <a>Attend an event</a>,
      <a>Donate</a>,
    ])).toEqual(true);
  });
  it('renders SocialLinks component', () => {
    expect(wrapper.find('SocialLinks')).toHaveLength(1);
  });
  it('sets document title', () => {
    expect(document.title).toEqual('Queens for Warren');
  });
});
