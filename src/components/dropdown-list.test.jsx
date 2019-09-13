import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DropdownList from './dropdown-list';

configure({ adapter: new Adapter() });

describe('DropdownList', () => {
  const wrapper = shallow(
    <DropdownList options={[
      { name: '1', desc: 'one' },
      { name: '2', desc: 'two' },
      { name: '3', desc: 'three' },
    ]}/>
  );

  describe('component rendering', () => {
    it('renders a DropdownCheckbox for each option', () => {
      expect(wrapper.find('DropdownCheckbox')).toHaveLength(3);
    });
    it('renders no checkbox with props.show = true when state.openIndex = null', () => {
      expect(wrapper.exists({ show: true })).toEqual(false);
    });
    it('renders checkbox with props.show = true when its index = state.openIndex', () => {
      wrapper.setState({ openIndex: 2 });
      expect(wrapper.childAt(2).prop('show')).toEqual(true);
    });
  });

  describe('toggleDesc method', () => {
    it('sets state.openIndex to param if param does not equal state.openIndex', () => {
      wrapper.instance().toggleDesc(1);
      expect(wrapper.state('openIndex')).toEqual(1);
    });
    it('sets state.openIndex to null is param is equal to state.openIndex', () => {
      wrapper.instance().toggleDesc(1);
      expect(wrapper.state('openIndex')).toEqual(null);
    });
  });
});

