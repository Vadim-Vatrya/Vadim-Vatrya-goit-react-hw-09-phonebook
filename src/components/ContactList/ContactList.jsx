import { useSelector } from 'react-redux';
import { getVisibleContacts } from '../../redux/contacts/contact-selectors';
import ContactItem from '../ContactItem';
import contactsReducer from '../../redux/contacts/contact-reducer';
// import { connect } from 'react-redux';
import Loader from '../Loader';
import styles from './ContactList.module.scss';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);

  return (
    <ul className={styles.list}>
      {contactsReducer.loading && <Loader />}

      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.listItem}>
          <ContactItem name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

