import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { connect } from 'react-redux';

import styles from './ContactForm.module.scss';
import {addContact} from '../../redux/contacts/contact-operations';
import { getContacts } from '../../redux/contacts/contact-selectors';
import Button from '../Button';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const handleChange = ({ target }) => {
        const { name, value } = target;

        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                return;
        }
    };


    const handleSubmit = e => {
        e.preventDefault();
        if (name === '') {
          alert(`Enter name`);
          return;
        }
    
        if (number === '') {
          alert(`Enter number`);
          return;
        }
    
        if (contacts.find(contact => contact.name === name)) {
          alert(`${name} is already in contacts.`);
          reset();
          return;
        }
    
        dispatch(addContact(name, number));
        reset();
      };
    
      const reset = () => {
        setName('');
        setNumber('');
      };

  
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.formLabel}>
                Name
                <input
                    type="text"
                    className={styles.formInput}
                    name="name"
                    value={name}
                    onChange={handleChange}
                    autoComplete="off"
                />
            </label>
            <label className={styles.formLabel}>
                Number
                <input
                    type="tel"
                    className={styles.formInput}
                    name="number"
                    value={number}
                    onChange={handleChange}
                    autoComplete="off"
                />
            </label>
            <Button />
        </form>
    );
}


// const mapStateToProps = state => ({
//     contactsItems: state.contacts.items,
// });

// const mapDispatchToProps = dispatch => {
//     return {
//         onSubmit: ({ name, number }) => dispatch(handleSubmit({ name, number }))
//     }
// };