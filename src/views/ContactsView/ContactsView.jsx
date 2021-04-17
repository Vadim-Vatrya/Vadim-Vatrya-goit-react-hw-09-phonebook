import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getLoading, getContacts } from '../../redux/contacts/contact-selectors';
import {fetchContacts} from '../../redux/contacts/contact-operations';
import Container from '../../components/Container';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';
import Loader from '../../components/Loader';



const ContactsView = () => {
    const contacts = useSelector(getContacts);
    const loading = useSelector(getLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);


    return (
    <Container>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        {loading && <Loader />}
     
        {contacts.length > 0 
        ? (
        <>
         <Filter />
         <ContactList />
        </>
        )
        : (<p>No contacts</p>)}
       
    </Container>
    )
};

export default ContactsView;