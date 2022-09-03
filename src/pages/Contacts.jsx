import Phonebook from '../components/Phonebook/Phonebook';
import Main from '../components/Main/Main';
import Contacts from '../components/Phonebook/Contacts/Contacts';
import { useGetContactsQuery } from 'redux/contactsApi';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import contactsOperation from 'redux/contacts/contacts-operation';

const ContactsPage = () => {
  // const { data, error, isLoading } = useGetContactsQuery();
  const data = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  // dispatch(contactsOperation.fetchContacts());

  useEffect(() => {
    dispatch(contactsOperation.fetchContacts());
  }, [dispatch]);

  return (
    <Main title="Phonebook">
      <Phonebook />
      {data.length > 0 ? <Contacts name="Contacts" /> : <p>Phonebook empty</p>}
      {/* {error && <p>Sorry.. somethiing wrong. Try again.</p>} */}
    </Main>
  );
};

export default ContactsPage;
