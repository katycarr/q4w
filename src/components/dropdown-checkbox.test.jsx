import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DropdownCheckbox from './dropdown-checkbox';

configure({ adapter: new Adapter() });

const getWrapper = (props) => {
  const mockOnClick = jest.fn();

  const wrapper = shallow(
    <DropdownCheckbox
      name='name'
      desc='desc'
      show
      onClick={mockOnClick}
      {...props}
    />
  );
  return [wrapper, mockOnClick];
};

describe('DropdownCheckbox', () => {
  let wrapper;
  let mockOnClick;

  beforeEach(() => {
    [wrapper, mockOnClick] = getWrapper();
  });

  it('renders a checkbox', () => {
    expect(wrapper.containsMatchingElement(<input type="checkbox" />)).toEqual(true);
  });
  it('renders a label', () => {
    expect(wrapper.exists('label')).toEqual(true);
  });
  it('renders description when props.show is true', () => {
    expect(wrapper.containsMatchingElement(
      <div>desc</div>,
    )).toEqual(true);
  });
  it('does not render description when props.show is false', () => {
    wrapper.setProps({ show: false });
    expect(wrapper.exists('div.vol__check__desc')).toEqual(false);
  });
  it('calls onClick when label is clicked', () => {
    const label = wrapper.find('label');
    label.simulate('click');
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
        
