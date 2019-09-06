import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import DropdownCheckbox from './dropdown-checkbox';

class DropdownList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openIndex: null,
    };
    this.toggleDesc = this.toggleDesc.bind(this);
  }

  toggleDesc(openIndex) {
    if (openIndex === this.state.openIndex) {
      this.setState({ openIndex: null });
    } else {
      this.setState({ openIndex });
    }
  }

  render() {
    const { options } = this.props;

    return (
      <React.Fragment>
        {options.map((opt, i) => (
          <DropdownCheckbox
            { ... opt }
            show={i === this.state.openIndex}
            onClick={() => this.toggleDesc(i)}
            key={opt.name}
          />
        ))}
      </React.Fragment>
    );
  }
}

DropdownList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      desc: PropTypes.oneOfType([ PropTypes.string, PropTypes.node ]),
    }),
  ).isRequired,
};

export default DropdownList;
