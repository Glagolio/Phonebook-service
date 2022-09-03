import React from 'react';
import Input from '../Input.styled';
import PropTypes from 'prop-types';

const InputPassword = ({ onChange, value }) => (
  <Input
    type="text"
    name="password"
    required
    placeholder="Enter password"
    onChange={onChange}
    value={value}
  />
);

export default InputPassword;

InputPassword.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
