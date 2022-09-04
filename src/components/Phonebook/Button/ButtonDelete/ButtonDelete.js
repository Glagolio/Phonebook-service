import React from 'react';
import ButtonDeleteStyle from './ButtonDelete.styled';
import PropTypes from 'prop-types';
// import { useDeleteContactMutation } from 'redux/contactsApi';
import { useSelector } from 'react-redux';
import contactsOperation from 'redux/contacts/contacts-operation';
import { useDispatch } from 'react-redux';

const ButtonDelete = ({ id }) => {
  // const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const dispatch = useDispatch();

  return (
    <ButtonDeleteStyle
      type="button"
      // disabled={isLoading}
      onClick={() => dispatch(contactsOperation.deleteContact(id))}
    >
      Delete
    </ButtonDeleteStyle>
  );
};

export default ButtonDelete;

ButtonDelete.propTypes = {
  id: PropTypes.string.isRequired,
};
