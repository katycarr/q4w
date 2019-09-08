import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

class DropdownCheckbox extends Component {
  render() {
    const { name, desc, show, onClick } = this.props;
    return (
      <div className="vol__check">
        <input type="checkbox" name={name} value={name} />
        <span className="vol__check__box" />
        <label
          htmlFor={name}
          role="button"
          onClick={onClick}
          className="vol__check__label"
        >
          {name}
          <FontAwesomeIcon icon={show ? faChevronUp : faChevronDown } />
        </label>
        {show && 
          <div className="vol__check__desc">
            {desc}
          </div>
        }
      </div>
    );
  }
}

DropdownCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.oneOfType([ PropTypes.string, PropTypes.node ]).isRequired,
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DropdownCheckbox;
