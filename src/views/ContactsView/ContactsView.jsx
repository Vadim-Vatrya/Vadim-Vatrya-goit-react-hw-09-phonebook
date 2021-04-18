import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getLoading } from '../../redux/contacts/contact-selectors';
import {fetchContacts} from '../../redux/contacts/contact-operations';
import Container from '../../components/Container';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';
import Loader from '../../components/Loader';
import styles from './ContactsViews.module.scss'



const ContactsView = () => {
    // const contacts = useSelector(getContacts);
    const loading = useSelector(getLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);


    return (
    <Container>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm />

        
        <div className={styles.section}>
        <h2>Contacts</h2>
        {loading && <Loader />}
         <Filter />
         <ContactList />
        </div>
              
    </Container>
    )
};

export default ContactsView;