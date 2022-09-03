import Phonebook from '../components/Phonebook/Phonebook';
import Main from '../components/Main/Main';
import Contacts from '../components/Phonebook/Contacts/Contacts';
import { useGetContactsQuery } from 'redux/contactsApi';

const ContactsPage = () => {
  const { data, error, isLoading } = useGetContactsQuery();

  return (
    <Main title="Phonebook">
      <Phonebook />
      {!isLoading && data.length > 0 ? (
        <Contacts name="Contacts" />
      ) : (
        <p>Phonebook empty</p>
      )}
      {error && <p>Sorry.. somethiing wrong. Try again.</p>}
    </Main>
  );
};

export default ContactsPage;
