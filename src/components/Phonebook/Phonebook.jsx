import { useState } from 'react';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contactsApi';
import Notiflix from 'notiflix';
import { useSelector, useDispatch } from 'react-redux';

import InputName from './Input/InputName/InputName';
import LabelPhoneBook from './Label/Label';
import ButtonSubmit from './Button/ButtonSubmit';
import InputNumber from './Input/InputNumber/inputNumber';
import FormPhonebook from './Form/Form';
import contactsOperation from 'redux/contacts/contacts-operation';

const Phonebook = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  // const { data: contacts } = useGetContactsQuery();
  // const [addContact] = useAddContactMutation();
  // const contacts = useSelector(state => state.contacs);

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setPhone(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  const formSubmitHandle = data => {
    // if (contacts.filter(contact => contact.name === data.name).length > 0) {
    //   Notiflix.Notify.warning(`${data.name} is already in contacts`);
    //   return;
    // }
    dispatch(contactsOperation.addContact(data));
    dispatch(contactsOperation.fetchContacts());

    //   try {
    //     await dispatch(contactsOperation.addContact(data));
    //     Notiflix.Notify.success('Contact added');
    //   } catch (error) {
    //     Notiflix.Notify.failure('Something wrong... try again');
    //   }
    // };
  };

  const clickOnBtnSubmit = async e => {
    e.preventDefault();
    formSubmitHandle({ name, number: phone });
    reset();
  };

  return (
    <FormPhonebook onSubmit={clickOnBtnSubmit}>
      <LabelPhoneBook title="Name">
        <InputName value={name} onChange={handleChange} />
      </LabelPhoneBook>
      <LabelPhoneBook title="Number">
        <InputNumber value={phone} onChange={handleChange} />
      </LabelPhoneBook>
      <ButtonSubmit text="Add contact" />
    </FormPhonebook>
  );
};

export default Phonebook;
