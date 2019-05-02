import React from 'react';
import PropTypes from 'prop-types';

import './input.css';

const Input = ({ onChange, value, onKeyPress }) => (
  <div className="inputWrapper">
  <div className="search-icon"></div>
    <input
      className="input"
      placeholder="пошук.."
      onChange={onChange}
      onKeyPress={onKeyPress}
      value={value}
    />
  </div>
);

Input.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  value: PropTypes.string,
}

Input.defaultProps = {
  onChange: () => {},
  onKeyPress: () => {},
  value: ''
}

export default Input;