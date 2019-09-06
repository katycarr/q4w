import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class TextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      visited: false,
    };
  }

  render() {
    const {
      label,
      required,
      placeholder,
      type,
      pattern,
    } = this.props;
    return (
      <div className="vol__input-container">
        <label htmlFor={label}>
          {label}
          {required ? '*' : ''}
        </label>
        <input
          type={type}
          name={label}
          onChange={e => this.setState({ value: e.target.value })}
          placeholder={placeholder}
          required={required}
          pattern={pattern}
          className={classnames("vol__text-input",
            { "vol__text-input--visited": this.state.visited },
            { "vol__text-input--required": required },
          )}
          onBlur={() => this.setState({ visited: true })}
        />
        {required && 
          <div className="vol__error">
            This is not a valid {label.toLowerCase()}. Please try again!
          </div>
        }
      </div>
    );
  }
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  pattern: PropTypes.string,
};

TextInput.defaultProps = {
  type: 'text',
  required: false,
  pattern: '^[a-zA-Z\s-]{1,20}$',
};

export default TextInput;
