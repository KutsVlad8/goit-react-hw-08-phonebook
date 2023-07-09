import { ContactForm } from 'components/ContactForm/ContactForm';
// import { ContactsList } from 'components/ContactsList/ContactsList';
// import { ContactsFilter } from 'components/ContactsFiter/ContactsFiter';
import {
  Container,
  FormContainer,
  Head,
  // LeftContainer,
  // Template,
  // Title,
} from './Phonebook.styled';

const Phonebook = () => {
  return (
    <>
      <Head>PhoneBook</Head>
      <Container>
        <FormContainer>
          <ContactForm />
        </FormContainer>

        {/* {contacts.length > 0 ? (
          <LeftContainer>
            <Title>Contacts</Title>
            <ContactsFilter />

            <ContactsList />
          </LeftContainer>
        ) : (
          <Template>add new contact</Template>
        )} */}
      </Container>
    </>
  );
};

export default Phonebook;
